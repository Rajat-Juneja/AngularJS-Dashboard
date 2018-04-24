dash.controller("dashctrl",function($scope){
    $scope.admin = false;

    // console.log($scope.allUsers);
    // angular.element(document.querySelector('body')).css('overflow','hidden');
    $scope.logKaro=()=>{
        angular.element(document.querySelector("#front")).css('transform','rotateX(0deg)');
        angular.element(document.querySelector("#back")).css('transform','rotateX(90deg)');
    };
    $scope.signKaro=()=>{
        angular.element(document.querySelector("#front")).css('transform','rotateX(-90deg)');
        angular.element(document.querySelector("#back")).css('transform','rotateX(0deg)');
    };
    $scope.callSubmit = (form) => {
        if (form.$valid) {
            var alreadyExist=false;
        for(let i=0;i<users.length;i++){
            if(users[i].id==form.em1.$modelValue){
            alert("Same User-id exists");
            form.em1.$$element[0].value="";
            form.pa1.$$element[0].value="";
            return;
        }
        }
            alert("Submitted the form");
            users.push({'id': form.em1.$modelValue, 'pass': form.pa1.$modelValue}); 
            form.em1.$$element[0].value="";
            form.pa1.$$element[0].value=""; 
            // console.log($scope.em2);
            $scope.em2 =   form.em1.$modelValue;;
            $scope.logKaro();
        } 
        else {
            alert("Can't submit, fill the required fields properly");
        }
    };
    $scope.callLogin = (form2) => {
        var flag = true;

        if(form2.$valid){
            // console.log(users[0] +" && "+ pass[0] );
            // console.log(form2.em2.$$element);
        for(let i=0;i<users.length;i++){
            if((users[i].id==form2.em2.$modelValue && users[i].pass==form2.pa2.$modelValue) || (form2.em2.$modelValue==admin[0].id && form2.pa2.$modelValue==admin[0].pass )){
                $scope.hidesignlog=true;
                if(form2.em2.$modelValue == 'adminrajat@gmail.com'){
                    $scope.admin=true;
                }
                $scope.dashboard=true;
                loggedUser[0] = form2.em2.$modelValue;
                // console.log(loggedUser[0]);
                // $scope.user1 = loggedUser[0];
                // console.log(loggedUser[0]);
                 
                form2.em2.$$element[0].value="";
                form2.pa2.$$element[0].value="";
                // angular.element(document.querySelector('body')).css('overflow','visible !important');
                flag=false;
                // location.href = "http://localhost:3000/home.html";
            }
        }
        if(flag){
            
            form2.em2.$$element[0].value="";
            form2.pa2.$$element[0].value="";
            alert("Can't submit, fill the required fields properly");
            return;
        }
    }
    else{
        
        form2.em2.$$element[0].value="";
            form2.pa2.$$element[0].value="";
            alert("Can't submit, fill the required fields properly");
            return;
    }
    };

    $scope.goBack = () =>{
        $scope.hidesignlog=false;
        $scope.dashboard=false;
        $scope.admin=false;
    };

    $scope.deleteMe = () =>{
        // console.log(users);
        // console.log(loggedUser[0]);
        users = users.filter(function(el){
            return loggedUser[0]!=el.id;
        });
        // console.log(users);
        $scope.goBack();
    };

    $scope.user = loggedUser[0];

});