angular.module('NerdService',[])
    .factory('Nerd',['$http',function($http){
        return {
            get: function(){
                return $http.get('/api/Nerds');
            },
            create:function(nerdData){
                return $http.post('/api/Nerds',nerdData);
            },
            delete:function(id){
                return $http.delete('/api/Nerds/'+ id);
            }
        }
    }])
