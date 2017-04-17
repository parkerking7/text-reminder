var app = angular.module("textApp");

app.controller("remindersController", ["$scope","messageService", function($scope, messageService){


    $scope.userInfo = messageService.userInfo;
    $scope.reminders = $scope.userInfo.reminders;

$scope.test = function($index){
    console.log($index)
};
    $scope.createReminder = function(data){
        data.time = data.hour + " : " + data.minute + " " + data.amPm;
        $scope.reminders.push(data);
        $scope.data = {};
        messageService.put($scope.userInfo);
    };
    $scope.deleteReminder = function($index){
        $scope.reminders.splice($index, 1);
        messageService.put($scope.userInfo);
    };
    $scope.runReminders = function($index){
        var minute = $scope.reminders[$index].minute;
        minute = parseInt(minute);
        var hour = $scope.reminders[$index].hour;
        hour = parseInt(hour);
        amPm = $scope.reminders[$index].amPm;
        if(amPm === "PM"){
            hour = hour + 12;
        }
        var message = $scope.reminders[$index].message;
        var number = $scope.userInfo.phoneNumber;
        messageService.send(number, message, hour, minute);
    }
}]);