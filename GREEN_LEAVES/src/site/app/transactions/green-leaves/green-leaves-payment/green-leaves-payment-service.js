(function () {
    'use strict';

    var service = function (systemConfig, $http) {

        this.loadClients = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/master/clients");
        };
        
        this.loadChequeBook = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/master/chequebook");
        };
        
        this.loadEmployees = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/master/employees");
        };

        this.vouchers = function () {
            return $http.get(systemConfig.apiUrl + "/api/v1/green-leaves/voucher-payment");
        };

        this.saveVoucherPayment = function (data) {
            return $http.post(systemConfig.apiUrl + "/api/v1/green-leaves/voucher-payment/save-voucher/", data);
        };


    };

    angular.module("appModule")
            .service("GreenLeavesPaymentService", service);
}());