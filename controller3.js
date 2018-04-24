dash.controller("dashctrl3",function($scope){
    $scope.removeUser=(item)=>{
            users = users.filter(function(el){
                return item.id!=el.id;
            });
            $scope.allUsers = users;
        };
        $scope.allUsers = users;
});