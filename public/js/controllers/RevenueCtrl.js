angular.module('RevenueCtrl', [])
    .controller('RevenueListController', function ($scope, $state, $window,Revenue, Alert) {

        $scope.revenues = Revenue.query();
        $scope.deleteRevenue = function (revenue) {
            revenue.$delete(function () {
                $scope.revenues.splice($scope.revenues.indexOf(revenue),1);
                Alert.add("success", "La recette a été supprimée");
            },function(error){
                Alert.add("warning", "Erreur lors de la suppression");
            })
        }
    })
    .controller('RevenueCreateController', function ($scope, Revenue,$state,Alert) {
        $scope.revenue = new Revenue();
        $scope.addRevenue = function(){
            $scope.revenue.$save(function () {
                Alert.add("success", "La recette a été ajoutée");
                $state.go('revenues');
            },function(error){
                Alert.add("warning", "Erreur lors de l'ajout");
            })};
    })
    .controller('RevenueEditController', function ($scope, Revenue, $stateParams, $state,Alert) {
        $scope.revenue = Revenue.get({id: $stateParams.id});

        $scope.updateRevenue = function () {
            $scope.revenue.$update(function () {
                Alert.add("success", "La recette a été mise à jour");
                $state.go('revenues');
            },function(error){
                Alert.add("warning", "Erreur lors de la modification");
            })
        }
    });