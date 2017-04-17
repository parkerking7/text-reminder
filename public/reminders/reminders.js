var app = angular.module("textApp");

app.controller("remindersController", ["$scope","messageService", function($scope, messageService){


    $scope.userInfo = messageService.userInfo;
    $scope.reminders = $scope.userInfo.reminders;

    $scope.createReminder = function(data){
        data.time = data.time + " : " + data.minute + " " + data.amPm;
        $scope.reminders.push(data);
        $scope.data = {};
        messageService.put($scope.userInfo);
    };
    $scope.deleteReminder = function($index){
        $scope.reminders.splice($index, 1);
        messageService.put($scope.userInfo);
    }

}]);