var Smoothies;
(function (Smoothies) {
    var Controllers;
    (function (Controllers) {
        var SmoothiesController = (function () {
            function SmoothiesController($scope, $http, $routeParams) {
                this.$scope = $scope;
                this.$http = $http;
                this.$routeParams = $routeParams;
                $http.get('smoothies/' + $routeParams.smoothies_id + '.json').success(function (data) {
                    $scope.data = data;
                });
            }
            return SmoothiesController;
        })();
        Controllers.SmoothiesController = SmoothiesController;
        angular.module("Smoothies").controller("Smoothies.Controllers.SmoothiesController", SmoothiesController);
    })(Controllers = Smoothies.Controllers || (Smoothies.Controllers = {}));
})(Smoothies || (Smoothies = {}));
