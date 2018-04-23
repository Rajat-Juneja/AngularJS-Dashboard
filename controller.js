dash.controller("dashctrl",function($scope){
    $scope.admin = false;
    $scope.allUsers = users;
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
            if(users[i]==form.em1.$modelValue){
            alert("Same User-id exists");
            form.em1.$$element[0].value="";
            form.pa1.$$element[0].value="";
            return;
        }
        }
            alert("Submitted the form");
            users.push(form.em1.$modelValue);
            pass.push(form.pa1.$modelValue); 
            form.em1.$$element[0].value="";
            form.pa1.$$element[0].value="";   
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
            if(users[i]==form2.em2.$modelValue && pass[i]==form2.pa2.$modelValue){
                $scope.hidesignlog=true;
                if(form2.em2.$modelValue == 'adminrajat@gmail.com'){
                    $scope.admin=true;
                }
                $scope.dashboard=true;
                loggedUser[0] = form2.em2.$modelValue;
                // console.log(loggedUser[0]);
                $scope.user1 = loggedUser[0];
                 
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
        // console.log(location.href.split(""));
        location.href = location.href.split("#")[0];

    };

    $scope.user = loggedUser[0];

});