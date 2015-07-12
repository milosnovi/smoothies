/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />
/// <reference path="../Libraries/Typescript/angularjs/angular-route.d.ts" />
var Smoothies;
(function (Smoothies) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "Smoothies.Controllers.SmoothiesController",
                templateUrl: "/app/Views/smoothies.html"
            });
            $routeProvider.otherwise({
                redirectTo: "/home"
            });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    Smoothies.Routes = Routes;
})(Smoothies || (Smoothies = {}));
