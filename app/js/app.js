(function () {
    var app = angular.module("smoothies", [
        'ngRoute'
    ]);
    app.config(smoothies.Routes.configureRoutes);
})();
