/// <reference path="../Libraries/Typescript/angularjs/angular.d.ts" />
/// <reference path="../Libraries/Typescript/angularjs/angular-route.d.ts" />
var smoothies;
(function (smoothies) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "angularWithTS.controllers.tsDemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playList"
            });
            $routeProvider.otherwise({
                redirectTo: "/home"
            });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    smoothies.Routes = Routes;
})(smoothies || (smoothies = {}));
