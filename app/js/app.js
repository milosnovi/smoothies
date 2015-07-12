/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />
(function () {
    var app = angular.module("smoothies", [
        'ngRoute'
    ]);
    app.config(smoothies.Routes.configureRoutes);
})();
