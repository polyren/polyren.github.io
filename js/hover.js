var menu = $('.menubutton');
var menu2 = $('.menubutton2');
var p1 = $('.part-1');
var p2 = $('.part-2');
var p3 = $('.part-3');
var menuhash=false;
var menuvisual=true;

var menuhash2=false;
var menuvisual2=true;
$(document).ready(function() {
$(".item").hover(
    function(){$(this).children("p").addClass("active")},
    function(){$(this).children("p").removeClass("active")}
       
)

$(".item").hover(
    function()
    {$(".scan").addClass("active")},
    function()
    {$(".scan").removeClass("active")}
    
)
$(".icons").hover(
    function()
    {$(this).children(".icons-back").addClass("active")},
    function()
    {$(this).children(".icons-back").removeClass("active")}
    
)

$(".item").hover(
    
    function()
    {$(".contet-text").addClass("change")},
    function()
    {$(".contet-text").removeClass("change")}
       
)

menu.on('click', function() {
        console.log(menuvisual);
        menuvisual=!menuvisual;
        menuon();
})
function menuon(){
        $(".mainmenu").addClass('visible');

        if(menuvisual){
            $(menu).removeClass('menu-active');
            $(p1).removeClass('p1-active');
            $(p2).removeClass('p2-active');
            $(p3).removeClass('p3-active');
            $(".menu").removeClass('active');
            $("#red-bg").removeClass('active');
            console.log('1111');   

        }else{
            $(menu).addClass('menu-active');
            $(p1).addClass('p1-active');
            $(p2).addClass('p2-active');
            $(p3).addClass('p3-active');
            $(".menu").addClass('active');
            $("#red-bg").addClass('active');
        }
}

menu2.on('click', function() {
        console.log(menuvisual);
        menuvisual2=!menuvisual2;
        menuon2();
})
function menuon2(){
        $(".mainmenu2").addClass('visible');

        if(menuvisual2){
            $(menu2).removeClass('menu-active');
            $(p1).removeClass('p1-active');
            $(p2).removeClass('p2-active');
            $(p3).removeClass('p3-active');
            $(".menu").removeClass('active');
            $("#red-bg").removeClass('active'); 

        }else{
            $(menu2).addClass('menu-active');
            $(p1).addClass('p1-active');
            $(p2).addClass('p2-active');
            $(p3).addClass('p3-active');
            $(".menu").addClass('active');
            $("#red-bg").addClass('active');
        }
}
    
    $("#logomain-svg").click(function() {
        console.log("asdfa");
    });
});