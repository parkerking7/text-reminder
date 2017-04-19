var app = angular.module("textApp");

app.service("messageService", function($http){

    this.get = function(number){
        return $http.get("http://localhost:3000/texts/" + number).then(function(response){
            return response;
            return response.data;
        })
    };
    this.put = function(newData){
        id = newData._id;
        return $http.put("http://localhost:3000/texts/" + id, newData).then(function(response){
            return response.data;
        })
    };
    this.send = function(number, message, hour, minute){
        return $http.post("http://localhost:3000/texts/" + number, {message:message,hour:hour, minute:minute}).then(function(response){
            return response.data;
        })
    }

    this.newUser = function(number){
        return $http.post("http://localhost:3000/texts", number).then(function(response){
            return response.data
        })
    }

});