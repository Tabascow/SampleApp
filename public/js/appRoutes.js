angular.module('AppRoutes',[]).config(function($stateProvider,$urlRouterProvider,$locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .state('nerds', {
            url:'/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
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