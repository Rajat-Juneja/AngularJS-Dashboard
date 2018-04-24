dash.controller("dashctrl2",function($scope,$interval){
    $interval(function(){
    $scope.user = loggedUser[0];
    if($scope.user){
    $scope.username = $scope.user.split("@")[0];
    }
},100);

});