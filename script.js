angular.module('app',['ui.compat','firebase']).config(function($stateProvider,$routeProvider){

    var home = {redirectTo:'/home'};

    $routeProvider
        .when('', home)
        .when('/', home);

    $stateProvider
        /* Home */
        .state('home', {
            url:'/home',
            templateUrl:'home.html'
        })
        /* Manage */
        .state('manage', {
            abstract:true,
            templateUrl:'manage.html'
        })
            /* Manage > Store */
            .state('manage.store', {
                templateUrl:'manage_store.html'
            })
            /* Manage > Edit Store */
            .state('manage.editStore', {
                url:'/manage/store/:id/edit',
                templateUrl:'manage_edit_store.html'
            })
                /* Manage > Store > Complaints */
                /* This is the default view for "Manage" */
                .state('manage.store.complaints', {
                    url:'/manage/store/:id',
                    templateUrl:'manage_store_complaints.html',
                    controller : "ManageController"
                })
                /* Manage > Store > Add Complaints */
                .state('manage.store.addComplaint', {
                    url:'/manage/store/:id/complaints/new',
                    templateUrl:'manage_store_addComplaint.html'
                })
                /* Manage > Store > Accidents */
                .state('manage.store.accidents', {
                    url:'/manage/store/:id/accidents',
                    templateUrl:'manage_store_accidents.html'
                })
            /* Manage > Employees */
            .state('manage.employees', {
                url:'/manage/employees',
                templateUrl: 'manage_employees.html'
            })
            /* Manage > Groups */
            .state('manage.groups', {
                url:'/manage/groups',
                templateUrl: 'manage_groups.html'
            })
        /* Assess */
        .state('assess', {
            url:'/assess',
            templateUrl:'assess.html'
        })
        /* Analyze */
        .state('analyze', {
            url:'/analyze',
            templateUrl:'analyze.html'
        });
})
.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
angular.module('app').controller('ApplicationController',['$scope','firebase',function($scope){


}]);


function ManageController($scope, $http, $location, $firebase) {

    var ref = new Firebase('https://felipehuggler.firebaseio.com/items');
    //$scope.items = $firebase(ref);
    //var ip = "http://localhost:3000";

    $scope.names = $firebase(ref);

    /*$http.get(ip+"/users").success(function(data){
        $scope.names = data;
    });*/

    $scope.addItem = function(){
        if(confirm("Deseja realmente salvar este registro?")){
            /*$http.post(ip+"/users", $scope.name).success(function(data){
                $scope.names = data;
                $location.path("/manage/store/1234");
            });*/

            /*$scope.names.$add({
              from: $scope.username, content: $scope.message
            });*/

            $scope.names.$add($scope.name);


            $location.path("/manage/store/1234");
        }
    };

    $scope.removeItem = function(id){
        if(confirm("Deseja realmente excluir este registro?")){
            $http.delete(ip+"/users/" + id).success(function(data){
                $scope.names = data;
            });
        }
    };

};