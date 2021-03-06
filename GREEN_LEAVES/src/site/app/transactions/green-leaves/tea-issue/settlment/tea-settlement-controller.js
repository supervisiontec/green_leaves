(function () {
    //module
    angular.module("teaSettlementModule", []);
    //controller
    angular.module("teaSettlementModule")
            .controller("teaSettlementController", function ($scope, $filter, $timeout, optionPane, ConfirmPane, TeaSettlementModel, Notification) {
                $scope.model = new TeaSettlementModel();
                $scope.ui = {};

                $scope.ui.new = function () {
                    $scope.ui.mode = "EDIT";
                    $scope.model.clear();
                    $scope.model.data.date = $filter('date')(new Date(), 'yyyy-MM-dd');
                    $timeout(function () {
                        angular.element(document.querySelectorAll("#routeOfficer"))[0].focus();
                    }, 10);
                };

                $scope.ui.discard = function () {
                    $scope.ui.mode = "IDEAL";
                    $scope.model.clear();
                };

                $scope.ui.focus = function () {
                    $timeout(function () {
                        angular.element(document.querySelectorAll("#clientId"))[0].focus();
                    }, 10);
                };

                //find client by client number
                $scope.ui.searchClient = function (e) {
                    var code = e ? e.keyCode || e.which : 13;
                    if (code === 13) {
                        var searchClient = $scope.model.searchClientByClientNo($scope.model.data.customerId);
                        if (angular.isUndefined(searchClient)) {
                            Notification.error("client not found!");
                            $scope.model.data.client = null;
                        } else {
                            var client = $scope.model.client(searchClient.indexNo);
                            $scope.model.data.client = client.indexNo;
                        }
                    }
                };

                $scope.ui.getPrice = function (indexNo) {
                    $scope.model.data.price = $scope.model.teaGrade(indexNo).price;
                };

                $scope.ui.searchPendingRouteOfficerRequest = function (model) {
                    $scope.model.searchPendingRouteOfficerRequest(model);
                };

                $scope.ui.addDetail = function () {
                    if (!$scope.model.data.routeOfficer) {
                        Notification.error("please select roote officer");
                    } else if (!$scope.model.data.client) {
                        Notification.error("please select client");
                    } else if (!$scope.model.data.date) {
                        Notification.error("please select date");
                    } else if (!$scope.model.data.teaGrade) {
                        Notification.error("please select tea grade");
                    } else if (!$scope.model.data.qty) {
                        Notification.error("please select qty");
                    } else if ($scope.model.data.routeOfficer
                            && $scope.model.data.date
                            && $scope.model.data.client
                            && $scope.model.data.teaGrade
                            && $scope.model.data.qty) {

                        var confirmation = $scope.model.issueConfirmation($scope.model.data.teaGrade);
                        if (angular.isUndefined(confirmation)) {
                            Notification.error("this tea grade not found this route officer");
                        } else {

                            //route officer request check and insert data check
                            var afterbal = $scope.model.getOfficerTeaGradeAmount($scope.model.data.teaGrade) - $scope.model.getTeaGradeIssueCount($scope.model.data.teaGrade);
                            afterbal = afterbal - parseInt($scope.model.data.qty);
                            if (afterbal >= 0) {

                                //duplicate entry check
                                var requestStatus = $scope.model.requestDuplicateCheck($scope.model.data.client, $scope.model.data.teaGrade);
                                if (angular.isUndefined(requestStatus)) {
                                    $scope.model.addDetail()
                                            .then(function () {
                                                $scope.ui.focus();
                                                $scope.model.data.date = $filter('date')(new Date(), 'yyyy-MM-dd');
                                            });
                                } else {
                                    Notification.error("this client - tea allrady exists!");
                                }

                            } else {
                                Notification.error("this route officer out of tea qty");
                            }
                        }
                    }
                };

                $scope.ui.editDetail = function (index) {
                    $scope.model.editDetail(index);
                    $scope.ui.focus();
                };

                $scope.ui.deleteDetail = function (index) {
                    $scope.model.deleteDetail(index);
                    $scope.ui.focus();
                };

                $scope.ui.save = function () {
                    ConfirmPane.primaryConfirm("Save Tea Issue Settlement")
                            .confirm(function () {
                                $scope.model.save()
                                        .then(function () {
                                            $scope.ui.discard();
                                            optionPane.successMessage("Save Tea Issue Settlement Success!");
                                        });
                            })
                            .discard(function () {
                                console.log("REJECT");
                            });
                };

                $scope.ui.clear = function () {
                    $scope.ui.selectedRequest = null;
                    $scope.model.clear();
                };

                $scope.ui.init = function () {
                    $scope.ui.mode = "IDEAL";
                    $scope.ui.type = "NORMAL";

                    $scope.$watch("[model.data.price,model.data.qty]", function (newVal, oldVal) {
                        $scope.model.data.amount = parseFloat($scope.model.data.price * $scope.model.data.qty);
                    }, true);
                };
                $scope.ui.init();

            });
}());