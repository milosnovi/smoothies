module Smoothies.Controllers {
  export class SmoothiesOverviewController {

      constructor(
        private $scope,
        private $http:angular.IHttpService
      ){
          $http.get('smoothies/smoothies.json').success(function(data) {
            $scope.smoothies = data;
          });
      }

  }

  angular.
    module("Smoothies").
    controller("Smoothies.Controllers.SmoothiesOverviewController", SmoothiesOverviewController)
}
