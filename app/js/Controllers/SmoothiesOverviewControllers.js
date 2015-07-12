var Smoothies;
(function (Smoothies) {
    var Controllers;
    (function (Controllers) {
        var SmoothiesOverviewController = (function () {
            function SmoothiesOverviewController($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                this.infoMessage = function () {
                    alert('Milos');
                };
                $http.get('smoothies/smoothies.json').success(function (data) {
                    $scope.phones = data;
                });
                $scope.orderProp = 'age';
            }
            return SmoothiesOverviewController;
        })();
        Controllers.SmoothiesOverviewController = SmoothiesOverviewController;
        angular.module("Smoothies").controller("Smoothies.Controllers.SmoothiesOverviewController", SmoothiesOverviewController);
    })(Controllers = Smoothies.Controllers || (Smoothies.Controllers = {}));
})(Smoothies || (Smoothies = {}));
