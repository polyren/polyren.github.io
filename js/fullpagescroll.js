$(document).ready(function() {
    loadData();      
});

    var homeprojects=[]; 
    var homepagedotsanchors=[];
    var programprojects=[];
    var commprojects=[];
    function loadData(){
        $.getJSON("./json/homepage.json", function(data){
            console.log( "homepagesuccess" );
            homeprojects=data;
            generatehomeProjectsHTML(homeprojects);
        })
        .fail(function(){
            console.log("homepagefailed");
        });
        
        $.getJSON("./json/program.json", function(data){
            console.log( "programsuccess" );
            programprojects=data;
            generateprogramProjectsHTML(programprojects);
        })
        .fail(function(){
            console.log("programfailed");
        });
        
        $.getJSON("./json/communication.json", function(data){
            console.log( "commsuccess" );
            commprojects=data;
            generatecommProjectsHTML(commprojects);
        })
        .fail(function(){
            console.log("commfailed");
        });    
    }
    
    function generatehomeProjectsHTML(data){
        
        var homepagelist=$('.homepage');
        var homepagedotlist=$('#homepageMenu');
        var homepage=$("#homepage-template").html();
        var homepagedot=$("#homepage-dots").html();
        var template=Handlebars.compile(homepage);
        var template2=Handlebars.compile(homepagedot);
        homepagelist.append(template(data));
        homepagedotlist.append(template2(data));
        
        var homeprojectcont= homeprojects.length; 
        for( i=homeprojectcont-homeprojectcont;i <= (homeprojectcont);i++){
            homepagedotsanchors[i]="page"+(i+1)+"dot";
        }
        console.log(homepagedotsanchors);
        var parallax = new Parallax(scene);
        
        $('#scene').fullpage({
            anchors:homepagedotsanchors,
            menu:'#homepageMenu',
        });   

        var checkoutbar = $('.check-out');
        var checkoutback = $('.check-out-back');      
        checkoutbar.hover(function(){
        checkoutback.toggleClass('active');
        })
    }

    function generateprogramProjectsHTML(data){
        var programnamelist=$('#program-list');
        var programnames=$('#programs').html();
        var pronametemplate=Handlebars.compile(programnames);
        programnamelist.append(pronametemplate(data));            
    }

    function generatecommProjectsHTML(data){
        var commnamelist=$('#comm-list');
        var commnames=$('#comms').html();
        var commtemplate=Handlebars.compile(commnames);
        commnamelist.append(commtemplate(data));            
    }
    
        

