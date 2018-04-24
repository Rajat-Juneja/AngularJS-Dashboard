dash.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"home.html",
        controller:"dashctrl2"
    }).when("/turn",{
        templateUrl:"turn.html",
        controller:"dashctrl4"

    }).when("/cube",{
        templateUrl:"cube.html"
    }).when("/userpage",{
        templateUrl:"users.html",
        controller:"dashctrl3"
    }).otherwise({redirectTo:"/"});
});