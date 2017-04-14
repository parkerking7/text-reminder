var app = angular.module("textApp");

app.controller("homeController", ["$scope","messageService","$location", function($scope, messageService,$location){

    document.getElementById('phone').addEventListener('blur', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
    });

$scope.findOrCreate = function(number) {
    console.log(number)
        messageService.get(number).then(function (response) {
            var foundUser = response.data[0];
            if(foundUser === undefined){
                console.log("number is not in the system")
            }
            else{
                messageService.userInfo = foundUser;
                $location.url("/reminders")

            }
        });
    }

}]);