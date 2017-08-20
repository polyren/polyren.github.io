window.onload = function(){
    
    var logo2=document.getElementById("logo2-svg");
    var logo2Doc=logo2.contentDocument;
    
	var mainlogo=document.getElementById("mainlogo-svg");
	var mainlogoDoc=mainlogo.contentDocument;
    
    var name1=logo2Doc.getElementById("num1");
    var name2=logo2Doc.getElementById("num2");
    var name3=logo2Doc.getElementById("num3");
    var name4=logo2Doc.getElementById("num4");
    var name5=logo2Doc.getElementById("num5");
    
    var triangle=mainlogoDoc.getElementById("littletriangle");
	var circle=mainlogoDoc.getElementById("littlecircle");
    var leftline1=mainlogoDoc.getElementById("ll1");
    var leftline2=mainlogoDoc.getElementById("ll2");
    var leftline3=mainlogoDoc.getElementById("ll3");
    var rightline1=mainlogoDoc.getElementById("rl1");
    var rightline2=mainlogoDoc.getElementById("rl2");
    var rightline3=mainlogoDoc.getElementById("rl3");
    var midverticalline=mainlogoDoc.getElementById("mvl");
    var midhorizonline=mainlogoDoc.getElementById("mhl");
    var rightupcircle=mainlogoDoc.getElementById("ruc");
    var leftdowncircle=mainlogoDoc.getElementById("ldc");
    
     $("#ainlogo-svg").hover(function(){
        $(name1).animate({
            svgFill:"#0176E8"   
        },1000)
            $(name2).animate({
            svgFill:"#0176E8"   
        },1000)        
            $(name3).animate({
            svgFill:"#0176E8"   
        },1000)
            $(name4).animate({
            svgFill:"#0176E8"   
        },1000)
            $(name5).animate({
            svgFill:"#0176E8"   
        },1000)
         $(triangle).animate({
             svgStroke:"#140E32"
         },1000)
        $(circle).animate({
             svgStroke:"#140E32"
         },1000)
        $(leftline1).animate({
             svgStroke:"#140E32"
         },1000)
        $(leftline2).animate({
             svgStroke:"#140E32"
         },1000)
        $(leftline3).animate({
             svgStroke:"#140E32"
         },1000)
        $(rightline1).animate({
             svgStroke:"#140E32"
         },1000)
        $(rightline2).animate({
             svgStroke:"#140E32"
         },1000)
        $(rightline3).animate({
             svgStroke:"#140E32"
         },1000)
        $(midverticalline).animate({
             svgStroke:"#140E32"
         },1000)
        $(midhorizonline).animate({
             svgStroke:"#140E32"
         },1000)
        $(rightupcircle).animate({
             svgStroke:"#140E32"
         },1000)
        $(leftdowncircle).animate({
             svgStroke:"#140E32"
         },1000)
        })
         
};
