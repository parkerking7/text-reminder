var app = angular.module("textApp");

app.service("messageService", function($http){

    this.get = function(number){
        return $http.get("http://localhost:3000/texts/" + number).then(function(response){
            return response;
        })
    }

});