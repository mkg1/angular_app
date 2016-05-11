'use strict';

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/site.html',
    controller: 'SiteController'
  })
    .otherwise({
      redirectTo: '/'
    });
  });
