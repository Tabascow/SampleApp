angular.module('ExpenseService', []).factory('Expense', function($resource) {
    return $resource('api/expenses/:id',{
        id:'@_id'},{
        update:{method:'PUT'}},{
        delete:{method:'DELETE'}})
});