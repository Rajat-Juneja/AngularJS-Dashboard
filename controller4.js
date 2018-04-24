dash.controller("dashctrl4",function(){

if($(document).width()>650){
    console.log('IN >650');
    $("#flipbook").turn({
        width: 600,
        height: 450,
        autoCenter: true,
        display:'double'
    });
}
else{
    console.log('IN < 650');
    $("#flipbook").turn({
        width: 300,
        height: 350,
        autoCenter: true,
        display:'single'
    });
}
jQuery.event.add(window, "resize", resizeFrame);
    function resizeFrame(){

        var w = $(document).width(); // this is div for ref

        if(w<=650){
            $('#flipbook').turn('display','single');
        $('#flipbook').turn('size', '300', '357');
        
        }else {
            $('#flipbook').turn('display','double');
        $('#flipbook').turn('size', '600', '456');
       
        }
}

});