$("#exercice1").click(function(){
        $("#div1").animate({left: "+=200px"},5000
        ).queue(function() {
                $(this).dequeue();
        }).animate({left: "-=200px"},5000);
});
$("#exercice2").click(function(){
        $(".div2").toggleClass("bgNouveau");
        $(".div2").slideToggle(2000);
        $(".div3").toggleClass("bgNouveau");
        $(".div3").slideToggle(2000);
});
$("#exercice3").click(function(){
        $("#div5").animate({height: "200px", opacity: '0.4'},"slow");
        $("#div5").animate({width: "200px", opacity: '0.4'},"slow");
        $("#div5").animate({height: "50px", opacity: '0.4'},"slow");
        $("#div5").animate({width: "50px", opacity: '0.4'},"slow");
        $("#div5").animate({opacity: '1'},"slow");
});
$("#exercice4").click(function(){
        $("#div6").fadeOut(3000
        ).queue(function() {
                $(this).dequeue();
        }).fadeIn(3000);
});
$("#exercice5").click(function(){
        setInterval(function(){ 
                $("#div7").fadeOut(
                ).queue(function() {
                        $(this).dequeue();
                        }).fadeIn();
        }, 1000);
});
$("#exo6Disable").click(function(){
        jQuery.fx.off = true;
});
$("#exo6Enable").click(function(){
        jQuery.fx.off = false;
});
$("#exo6Toggle").click(function(){
        $("#div8").toggle("slow");
});