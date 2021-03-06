(function () {
    angular.module("appModule")
            .service("InputPane", function ($uibModal, $q, Notification) {
                var defer;

                var ctrl = function (type, title, inputType) {
                    function Controller(modalInstance, $scope, $timeout) {
                        //modal instance
                        this.modalInstance = modalInstance;
                        this.timeout = $timeout;

                        this.type = type;
                        this.title = title;
                        this.inputType = inputType;
                        this.inputValue = null;

                        if (!this.inputType) {
                            this.inputType = "text";
                        }

                        //class and icon
                        switch (type) {
                            case 'primary':
                                this.optionPaneClass = 'option-pane-primary';
                                this.optionPaneIcon = 'glyphicon glyphicon-tag';
                                this.title = typeof this.title === 'undefined' ? 'Confirm' : this.title;
                                break;
                            default:
                                this.optionPaneClass = 'option-pane-default';
                                this.optionPaneIcon = 'glyphicon-bell';
                                this.title = typeof this.title === 'undefined' ? 'Note' : this.title;
                                break;
                        }

                        this.confirm = function (data) {
                            console.log(this.inputValue);
                            var scope = this;
                            console.log(data);
                            console.log($scope.input);
                            this.timeout(function () {
                                if (angular.isUndefined(data)) {
                                    Notification.error("please input text");
                                } else {
                                    scope.modalInstance.close();
                                    defer.resolve(data);
                                }
                            }, 250);
                        };

                        this.discard = function () {
                            var scope = this;
                            this.timeout(function () {
                                scope.modalInstance.close();
                                defer.reject();
                            }, 250);
                        }
                    }
//                    Controller.prototype = {
//                        confirm: function (data) {
//                            var scope = this;
//                            console.log(data);
//                            console.log($scope.input);
//                            this.timeout(function () {
//                                if (angular.isUndefined(data)) {
//                                    Notification.error("please input text");
//                                } else {
//                                    scope.modalInstance.close();
//                                    defer.resolve(data);
//                                }
//                            }, 250);
//                        },
//                        discard: function () {
//                            var scope = this;
//                            this.timeout(function () {
//                                scope.modalInstance.close();
//                                defer.reject();
//                            }, 250);
//                        }
//                    };

                    return ['$uibModalInstance', '$scope', '$timeout', Controller];
                };

                this.confirm = function (optionType, title, type) {
                    defer = $q.defer();

                    $uibModal.open({
                        animation: true,
                        backdrop: 'static',
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: './app/util/dialog/input-option-pane.html',
                        controller: ctrl(optionType, title, type),
                        controllerAs: '$ctrl',
                        size: 'md'
                    });

                    return {
                        confirm: function (callback) {
                            defer.promise.then(callback, null);
                            return this;
                        },
                        discard: function (callback) {
                            defer.promise.then(null, callback);
                            return this;
                        }
                    };
                };

                this.primaryInput = function (title, type) {
                    return this.confirm('primary', title, type);
                };

                this.defaultInput = function (title, type) {
                    return this.confirm('default', title, type);
                };

            });
}());
