$(window).on("load",function(){
    $(".sitewrap").css("display","block");
    console.log( "window loaded" );
    
})

$(function () {

function updatePageForTopImg(){
    // background image using size cover
    // top background image
    $('.portalbg').css('background-image', "url('../assets/imgs/keystone/trumbneil/portalnail.jpg')");
    $('.oceanbg').css('background-image', "url('../assets/imgs/ocean/trumbneil/oceannail.jpg')");
    $('.redboybg').css('background-image', "url('../assets/imgs/redboy/trumbneil/redboyneil.jpg')");
    $('.echobg').css('background-image', "url('../assets/imgs/echo/trumbneil/echoneil.jpg')");
    $('.meatboybg').css('background-image', "url('../assets/imgs/supermeathead/trumbneil/meatboyneil.jpg')");
    $('.shakebg').css('background-image', "url('../assets/imgs/shakerama/trumbneil/shakeramaneil.jpg')");
    $('.USHMMbg').css('background-image', "url('../assets/imgs/joind/trumbneil/joind_a.png')");
    $('.xunxiangbg').css('background-image', "url('../assets/imgs/xunxiang/trumbneil/xunxiangneil.jpg')");
}
    
function ReplaceText(){
    $(".item").hover(function(){
        year= $(this).find(".phone-item-year").html();
        name= $(this).find("#name > div").html();
        fields= $(this).find("#pad-fields > div").html();
        $(".proside #year > div").html(year);
        $(".proside #name > div").html(name);
        $(".proside #fields > div").html(fields);
    })
}
    
$(window).on('load', function(){
updatePageForTopImg();
ReplaceText();    
});
});