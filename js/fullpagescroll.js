$(document).ready(function() {
    loadData();      
});

    var projects=[]; 
    var homepagedotsanchors=[];
    function loadData(){
        $.getJSON("./json/homepage.json", function(data){
            console.log( "success" );
            projects=data;
            generateAllProjectsHTML(projects);
        })
        .fail(function(){
            console.log("failed");
        });
        

    }
    
    function generateAllProjectsHTML(data){
        
        var homepagelist=$('.homepage');
        var homepagedotlist=$('#homepageMenu');
        var homepage=$("#homepage-template").html();
        var homepagedot=$("#homepage-dots").html();
        var template=Handlebars.compile(homepage);
        var template2=Handlebars.compile(homepagedot);
        homepagelist.append(template(data));
        homepagedotlist.append(template2(data));
        
        var homeprojectcont= projects.length; 
        for( i=homeprojectcont-homeprojectcont;i <= (homeprojectcont);i++){
            homepagedotsanchors[i]="page"+(i+1)+"dot";
        }
        console.log(homepagedotsanchors);
        var parallax = new Parallax(scene);
        
        $('#scene').fullpage({
            anchors:homepagedotsanchors,
            menu:'#homepageMenu',
            css3: true
        });
        
        

        var checkoutbar = $('.check-out');
        var checkoutback = $('.check-out-back');      
        checkoutbar.hover(function(){
        checkoutback.toggleClass('active');
        })
    }

    
        

