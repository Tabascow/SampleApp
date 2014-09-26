angular.module('AppRoutes',[]).config(function($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .state('revenues', {
            url:'/revenues',
            templateUrl: 'views/revenues.html',
            controller: 'RevenueListController'
        })

        .state('newRevenue',{
            url:'/revenues/new',
            templateUrl:'views/revenue-add.html',
            controller:'RevenueCreateController'
        })

        .state('editRevenue',{
            url:'/revenues/:id/edit',
            templateUrl:'views/revenue-edit.html',
            controller:'RevenueEditController'
        })

        .state('expenses', {
            url:'/expenses',
            templateUrl: 'views/expenses.html',
            controller: 'ExpenseListController'
        })

        .state('newExpense',{
            url:'/expenses/new',
            templateUrl:'views/expense-add.html',
            controller:'ExpenseCreateController'
        })

        .state('editExpense',{
            url:'/expenses/:id/edit',
            templateUrl:'views/expense-edit.html',
            controller:'ExpenseEditController'
        })

    $locationProvider.html5Mode(true);

});