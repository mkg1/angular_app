'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })
  .when('/secondpage', {
    templateUrl: 'partials/secondpage.html',
    controller: 'SiteController'
  })
    .otherwise({
      redirectTo: '/'
    });
  });
