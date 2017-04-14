var app = angular.module("textApp");

app.controller("remindersController", ["$scope","messageService", function($scope, messageService){


    $scope.userInfo = messageService.userInfo;
    $scope.reminders = $scope.userInfo.reminders;
    console.log($scope.reminders)


}]);