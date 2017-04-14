var app = angular.module("textApp");

app.controller("homeController", ["$scope", function($scope){

    document.getElementById('phone').addEventListener('blur', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
    });
$scope.findPhone = function(){
    var number = $scope.phoneNumber;
    console.log(number)
}
}]);