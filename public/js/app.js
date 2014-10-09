var app= angular.module('sampleApp',
    [
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'NotificationService',
        'User',
        'AppRoutes',
        'MainCtrl',
        'RevenueCtrl',
        'RevenueService',
        'ExpenseCtrl',
        'ExpenseService',
        'AdminCtrl'
    ]);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

app.run(function($rootScope, $location, $window, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        //redirect only if both isAuthenticated is false and no token is set
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication
            && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {

            $location.path("/login");
        }
    });
});