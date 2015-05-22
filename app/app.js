var myApp = angular.module('inventoryApp', []);

myApp.controller('InventoryController', function ($scope) {

    $scope.message = 'Hello...Angular';

    $scope.sayHello = function () {
        alert('Hello...from Angular controller');
    }

    function init() {
        alert('Controller Initialized');
    }

    init();

});




var myWebAdminApp = angular.module('myWebAdminApp', []);
myWebAdminApp.controller('IndexController', function ($scope) {

    $scope.appName = 'Web Administrtion Tool';

    $scope.greet = function () {
        alert('Hello..'+$scope.name);
    }
});




