angular.module('ExpenseCtrl', [])
    .controller('ExpenseListController', function ($scope, $state, $window,Expense) {

        $scope.expenses = Expense.query();
        $scope.deleteExpense = function (expense) {
            expense.$delete(function () {
                $scope.expenses.splice($scope.expenses.indexOf(expense),1);
            },function(error){
            })
        }
    })
    .controller('ExpenseCreateController', function ($scope, Expense,$state) {
        $scope.expense = new Expense();
        $scope.addExpense = function(){
            $scope.expense.$save(function () {
                $state.go('expenses');
            },function(error){

            })};
    })
    .controller('ExpenseEditController', function ($scope, Expense, $stateParams, $state) {
        $scope.expense = Expense.get({id: $stateParams.id});

        $scope.updateExpense = function () {
            $scope.expense.$update(function () {
                $state.go('expenses');

            },function(error){

            })
        }
    });