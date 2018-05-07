var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
    
    $scope.calculer = function ()
    {
        $scope.s=0;
        if ($scope.ch1)
            $scope.s +=parseFloat($scope.t1)*2.75;
        if ($scope.ch2)
            $scope.s +=parseFloat($scope.t2)*1.80;
        if ($scope.ch3)
            $scope.s +=parseFloat($scope.t3)*0.40;
        if ($scope.ch4)
            $scope.s+=  parseFloat($scope.t4)*1.16;
        if ($scope.ch5)
            $scope.s += parseFloat($scope.t5)*80;
        if ($scope.ch5)
            $scope.s+= parseFloat($scope.t6) * 140;
            }
   

});