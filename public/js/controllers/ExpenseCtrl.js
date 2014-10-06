angular.module('ExpenseCtrl', [])
    .controller('ExpenseListController', function ($scope, $state, $window,Expense,Alert) {
        $scope.expenses = Expense.query();

        $scope.deleteExpense = function (expense) {
            expense.$delete(function () {
                $scope.expenses.splice($scope.expenses.indexOf(expense),1);
                Alert.add("success", "La dépense a été supprimée");
            },function(error){
                Alert.add("warning", "Erreur lors de la suppression");

            })
        }
    })
    .controller('ExpenseCreateController', function ($scope, Expense,$state, Alert) {
        $scope.expense = new Expense();
        $scope.addExpense = function(){
            $scope.expense.$save(function () {
                Alert.add("success", "La dépense a été créee");
                $state.go('expenses');
            },function(error){
                Alert.add("warning", "Erreur lors de la création");
            })};
    })
    .controller('ExpenseEditController', function ($scope, Expense, $stateParams, $state, Alert) {
        $scope.expense = Expense.get({id: $stateParams.id});

        $scope.updateExpense = function () {
            $scope.expense.$update(function () {
                Alert.add("success", "La dépense a été éditée");
                $state.go('expenses');
            },function(error){
                Alert.add("warning", "Erreur lors de la modification");
            })
        }
    });