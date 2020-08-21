
$(document).ready(function(){


    $(".web-btn").click(function(){
        $(".scroll").filter(".app").hide(2000);
        $(".scroll").filter(".web").show(1000);
        
        $(".all-btn").removeClass("active");
        $(this).addClass("active");
    })
    $(".app-btn").click(function(){
        $(".scroll").filter(".web").hide(2000);
        $(".scroll").filter(".app").show(1000);
        
        $(".web-btn").removeClass("active");
        $(this).addClass("active");
    })
    $(".icon-btn").click(function(){
        $(".scroll").filter(".web").hide(2000);
        $(".scroll").filter(".app").hide(2000);
        $(".scroll").filter(".icons").show(1000);
        
        $(".app-btn").removeClass("active");
        $(this).addClass("active");
    })
    $(".all-btn").click(function(){
        $(".scroll").filter(".icons").hide(500);
        $(".scroll").show(1000);
        
        
        $(".icon-btn").removeClass("active");
        $(this).addClass("active");
    })


})