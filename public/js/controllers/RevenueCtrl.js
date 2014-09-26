angular.module('RevenueCtrl', [])
    .controller('RevenueListController', function ($scope, $state, $window,Revenue) {

        $scope.revenues = Revenue.query();
        $scope.deleteRevenue = function (revenue) {
            revenue.$delete(function () {
                $scope.revenues.splice($scope.revenues.indexOf(revenue),1);
            },function(error){
            })
        }
    })
    .controller('RevenueCreateController', function ($scope, Revenue,$state) {
        $scope.revenue = new Revenue();
        $scope.addRevenue = function(){
            $scope.revenue.$save(function () {
                $state.go('revenues');
            },function(error){

            })};
    })
    .controller('RevenueEditController', function ($scope, Revenue, $stateParams, $state) {
        $scope.revenue = Revenue.get({id: $stateParams.id});

        $scope.updateRevenue = function () {
            $scope.revenue.$update(function () {
                $state.go('revenues');

            },function(error){

            })
        }
    });