angular.module('NotificationService', []).factory('Alert', function($rootScope, $timeout) {
    var alertService;
    $rootScope.alerts = [];

    return alertService = {
        add: function(type, msg, timeout) {
            timeout = (typeof timeout === "undefined")? 3000:timeout;
            $rootScope.alerts.push({
                type: type,
                msg: msg,
                close: function() {
                    return alertService.closeAlert(this);
                }
            });

            if (timeout) {
                $timeout(function(){
                    alertService.closeAlert(this);
                }, timeout);
            }
        },
        closeAlert: function(alert) {
            return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
        },
        closeAlertIdx: function(index) {
            return $rootScope.alerts.splice(index, 1);
        }

    };
});