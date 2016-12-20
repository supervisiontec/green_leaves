(function () {
    angular.module("appModule")
            .factory("LoanCheckModelFactory", function () {
                var factory = {};
                factory.newData = function () {
                    var data = {
                        "indexNo": null,
                        "remark": null,
                        "client": null,
                        "expectedLoanDate": null,
                        "loanStartDate": null,
                        "interestRate": null,
                        "installmentCount": null,
                        "installmentAmount": null,
                        "panaltyRate": null
                    };
                    return data;
                };
                factory.newTempData = function () {
                    var tempData = {
                        "expectedLoanDate": null,
                        "loanStartDate": null,
                        "interestRate": null,
                        "installmentCount": null,
                        "installmentAmount": null,
                        "panaltyRate": null
                    };
                    return tempData;
                };
                return factory;
            });
}());