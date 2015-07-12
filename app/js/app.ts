/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />

((): void => {

    var app = angular.module("smoothies", [
      'ngRoute'
    ]);

    app.config(smoothies.Routes.configureRoutes);
})()
