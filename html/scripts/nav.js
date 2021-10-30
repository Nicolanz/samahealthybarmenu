
var prevScrollpos = $(window).scrollTop();
var firstScrollpos = $(window).scrollTop();

$(window).scroll(function(){

    var currentScrollPos = $(window).scrollTop();
    if (currentScrollPos < prevScrollpos){
        $("#navbar").css("top", "-125px");
    }
    else{
        $("#navbar").css("top", "0");
    }
    if (currentScrollPos > firstScrollpos  + 150 ){
        $("#navbar").css("min-height", "125px");
        $("#navbar").css("background", "#eff4f8ef");
        $("#navbar").css("box-shadow", "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px");
        $("#navbar").css("transition", "0.3s ease-in");
    }
    else if (currentScrollPos <= firstScrollpos + 20){
        $("#navbar").css("top", "0");
        $("#navbar").css("min-height", "150px");
        $("#navbar").css("background", "transparent");
        $("#navbar").css("box-shadow", "initial");
        $("#navbar").css("transition", "0.3s ease-in");
    }
    prevScrollpos = currentScrollPos;
});
