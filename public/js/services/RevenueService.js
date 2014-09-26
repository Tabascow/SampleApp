angular.module('RevenueService', []).factory('Revenue',function($resource){
    return $resource('api/revenues/:id',{
        id:'@_id'},{
        update:{method:'PUT'}},{
        delete:{method:'DELETE'}})
});