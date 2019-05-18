'use strict';
var app = angular.module('animeInfo', []);


app.controller('animeControl', function($scope, $http, $sce) {
    var init = function(){
        $http.get('anime.json')
        .then(function(JSONfile){
            //console.log(JSONfile.data.anime)
            var anime = JSONfile.data.anime
            $scope.index = { anime: 0, video: 0 }
            $scope.animes = anime
            $scope.show = $scope.animes[0]
            $scope.titles = []
            $scope.animes.forEach(function(element){
              $scope.titles.push(element.title)
            })
            $scope.videos = $scope.show.video.length
            $scope.index.video = ($scope.videos != 0) ? 0 : -1
        });
    }
    
    init();
    
    $scope.trust = function(url){
        var pre = "https://www.youtube.com/embed/"
        return $sce.trustAsResourceUrl(pre+url)
    }
    
    $scope.select = function(index, name){
        if(name == 'video') $scope.index.video = index
        else {
            $scope.index.anime = index
            $scope.show = $scope.animes[index]
            $scope.videos = $scope.show.video.length
            $scope.index.video = ($scope.videos != 0) ? 0 : -1
        }
    }
})