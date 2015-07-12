/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />
/// <reference path="../Libraries/Typescript/angularjs/angular-route.d.ts" />

module Smoothies {
    export class Routes {
        static $inject = ["$routeProvider"];

        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", {
                controller: "Smoothies.Controllers.SmoothiesController",
                templateUrl: "/app/Views/smoothies.html"
            });
            $routeProvider.otherwise({
                redirectTo: "/home"
            });
        }
    }
}
