$(function(){
var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.fromTo(".layer1", 1, {scale: 1, autoAlpha: 1, top: "60%"}, {top: "20%",autoAlpha: 0, ease: Linear.easeNone}),
		]);

	var tween2 = new TimelineMax()
		.add([
			TweenMax.fromTo(".layer2", 1, {scale: 1, autoAlpha: 0 }, {autoAlpha: 1, ease: Linear.easeNone}),
		]);
    var tween3 = new TimelineMax()
		.add([
			TweenMax.fromTo("#bannder .layer3", 1, {scale: 1.2, autoAlpha: 1, top:-200}, {top: 200,autoAlpha: 1, ease: Linear.easeNone}),
		]);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "40%"})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "20%"})
					.setTween(tween2)
//					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

    var scene3 = new ScrollMagic.Scene({triggerElement: "#pin1",duration:"800",triggerHook:0.4})
					.setPin("#pin1")
//					.addIndicators({name:"2(duration:0)"}) // add indicators (requires plugin)
					.addTo(controller);

    var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger3",duration:"180%"})
					.setTween(tween3)
//					.addIndicators({name:"2(duration:0)"}) // add indicators (requires plugin)
					.addTo(controller);
    
    $(".item-ipad-side").each(function(){
        var tween4 = TweenMax.from($(this),0.3,{autoAlpha:0,scale:1,x:'+=30',ease:Linear.easeNone});
        var scene=new ScrollMagic.Scene({
            triggerElement:this,duration:"10%",
            triggerHook:0.8
        })
        .setTween(tween4)
        .addTo(controller);
        
    })
    
//  var tween5 = TweenMax.from(".pros-container",0.5,{});    
  
  var autoscroll=new ScrollMagic.Scene({triggerElement: "a#projects",duration:200,triggerHook:"onLeave"})
//      .setTween(tween5)
//      .addIndicators()
      .addTo(controller);
  
   controller.scrollTo(function (newpos){
       TweenMax.to(window, 0.5,{scrollTo: {y: newpos}});
   });
    
//    $(document).on("click", "a[href^='#']",function(e){
//        var id = $(this).attr("href");
//        if ($(id).length > 0){
//            e.preventDefault();
//            controller.scrollTo(id);
//            if (window.history && window.history.pushState){
//                history.pushState("", document.title, id);
//            }
//        }
//    });
});