angular.module('MyApp',[]);

angular.module('MyApp').controller('MyCtrl', function($scope){
    $scope.sms = 'Hola mundo';
});

angular.module('MyApp').controller('MyCtrl2', function($scope){
    //$scope.sms = 'Hola mundo :D'; controlador aninado
});

angular.module('MyApp').controller('MyCtrl3', function($scope){
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.resp = 0;

    $scope.sumar = function() {
        $scope.resp = $scope.num1 + $scope.num2;
    }

});