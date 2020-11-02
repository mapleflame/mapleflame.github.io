'use strict';
var app=angular.module('dataInfo', []);


app.controller('dataControl', function($scope, $http) {
    var init = function(){
        $http.get('data.json')
        .then(function(JSONfile){
            //console.log(JSONfile.data[202010])
            $scope.season = JSONfile.data[202010]
            $scope.finished = $scope.season.finished
            $scope.continue = $scope.season.continue
        });
    }
    
    init();
    
    $scope.save = function(title, group, link, episode, $event) {
            var filename = '['+group+']['+title+']['+episode+']'
			var downloadLink = angular.element($event.currentTarget);
            console.log($event.currentTarget )
            downloadLink.attr('href', link);
            downloadLink.attr('download', filename);
		};
})