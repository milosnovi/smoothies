/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />

((): void => {
    'use strict'

    var app = angular
      .module("Smoothies", [
        'ngRoute'
      ])
      .config(config);

    function config($routeProvider: ng.route.IRouteProvider) {
      $routeProvider
          .when("/home", {
            controller: "Smoothies.Controllers.SmoothiesOverviewController",
            templateUrl: "/app/Views/smoothies.html"
          })
          .when("/smoothies/:smoothies_id", {
            controller: "Smoothies.Controllers.SmoothiesController",
            templateUrl: "/app/Views/smoothies_detail.html"
          })
          .otherwise({
            redirectTo: "/home"
          });
      };

    /*app.config(Smoothies.Routes.configureRoutes);*/
})()
