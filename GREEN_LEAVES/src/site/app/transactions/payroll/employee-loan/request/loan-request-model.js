(function () {
    var factory = function ($q, LoanRequestService, LoanRequestModelFactory, optionPane) {
        function LoanRequestModel() {
            this.constructor();
        }

        //prototype functions
        LoanRequestModel.prototype = {
            data: {},
            //temp input
            tempData: {},
            //client information
            employees: [],
            //constructor
            constructor: function () {
                var that = this;
                that.data = LoanRequestModelFactory.newData();
                that.tempData = LoanRequestModelFactory.newTempData();

//                load employee
                LoanRequestService.loadEmployee()
                        .success(function (data) {
                            that.employees = data;
                        });
            },

            //clear all data
            clear: function () {
                this.data = LoanRequestModelFactory.newData();
                this.tempData = LoanRequestModelFactory.newTempData();
            },

            //table added
            insertLoanRequest: function () {
                var defer = $q.defer();
                var that = this;
                if (that.tempData.employee
                        && that.tempData.amount > 0
                        && that.tempData.installmentCount > 0) {
                    that.data.loanRequestDetails.unshift(that.tempData);
                    that.tempData = LoanRequestModelFactory.newTempData();
                    defer.resolve();
                } else {
                    defer.reject();
                }
                return defer.promise;
            },
            deleteDetail: function (indexNo) {
                var that = this;
                that.data.loanRequestDetails.splice(indexNo, 1);
            },
            editDetail: function (indexNo) {
                var requestDetail = this.data.loanRequestDetails[indexNo];
                this.data.loanRequestDetails.splice(indexNo, 1);
                this.tempData = requestDetail;
            },

            //save requests
            saveRequest: function () {
                var data = JSON.stringify(this.data);
                LoanRequestService.saveLoanRequest(data)
                        .success(function (data) {
                            optionPane.successMessage("Loan request saved successfully.");
                        })
                        .error(function (data) {
                            optionPane.dangerMessage("Loan request save failed.");
                        });

            },
            //return label for client
            employeeLabel: function (indexNo) {
                var label;
                angular.forEach(this.employees, function (value) {
                    if (value.indexNo === indexNo) {
                        label = value.indexNo + "-" + value.name;
                        return;
                    }
                });

                return label;
            }
        };

        return LoanRequestModel;
    };

    angular.module("appModule")
            .factory("EmployeeLoanRequestModel", factory);
}());