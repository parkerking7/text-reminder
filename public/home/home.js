var app = angular.module("textApp");

app.controller("homeController", ["$scope","messageService","$location", function($scope, messageService,$location){

    document.getElementById('phone').addEventListener('blur', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
    });

$scope.findOrCreate = function(number) {
        messageService.get(number).then(function (response) {
            var foundUser = response.data[0];
            if(foundUser === undefined){
                number = {phoneNumber:number};
                console.log(number);
                messageService.newUser(number).then(function(response){
                    messageService.get(response.phoneNumber).then(function(response){
                        var createdUser = response.data[0];
                        messageService.userInfo = createdUser;
                        $location.url("/reminders");
                    })
                })
            }
            else{
                messageService.userInfo = foundUser;
                $location.url("/reminders");

            }
        });
    }

}]);