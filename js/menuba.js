    var menu = $('.menubutton');
    var p1 = $('.part-1');
    var p2 = $('.part-2');
    var p3 = $('.part-3');
    var gmailback= $('.gmailback');
    var gmailbar = $('.emailbar');
    var gmailangle = $('.eangle');
    var checkoutbar = $('.check-out');
    var bigprojects=$("#projects-big");
    var bigresume=$("#resume-big");
    var bighomepage=$("#homepage-big");
    var menuvisual=true;
    
    var youtube= $('.youtube');
    var facebook= $('.facebook');
    var github= $('.github');
    var link= $('.link');

    var checkoutback = $('.check-out-back');
    var youtubebc= $('.youtube-back');
    var facebookbc= $('.facebook-back');
    var githubbc= $('.github-back');
    var linkbc= $('.link-back');
    var menuhash=false;
    var resumehash=false;

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
            $("#red-bg").removeClass('active');
            $("#transparent-bg").removeClass('active');
            $("#homepageMenu").removeClass('inactive');
            $(".homepage").removeClass('inactive');
            $(".brief").removeClass('active');
            $("#projects").removeClass('active');
            $("#resume").removeClass('active');
            $("#homepage").removeClass('active');
            $(".mainmenu-text").removeClass('active');

            $(".scroll-container").removeClass('inactive');
            $(".homepageback").removeClass('active');
            $(".projectsback").removeClass('active');
            $(".resumeback").removeClass('active');
            $("#resume-big-big").removeClass('active');
            $("#homepage-big").removeClass('active');          
            $(".mainmenu-program").removeClass('active');
            $(".mainmenu-comm").removeClass('active');
            $("#projects-big").removeClass('active');
            
            $('#scene').fullpage.setAllowScrolling(true);

        }else{
            $(menu).addClass('menu-active');
            $(p1).addClass('p1-active');
            $(p2).addClass('p2-active');
            $(p3).addClass('p3-active');
            $("#red-bg").addClass('active');
            $("#transparent-bg").addClass('active');
//            $("#homepageMenu").removeClass('visible');
            $("#homepageMenu").addClass('inactive');
            $(".homepage").addClass('inactive');
            $(".brief").addClass('active');
            $("#projects").addClass('active');
            $("#resume").addClass('active');
            $("#homepage").addClass('active');
            $(".mainmenu-text").addClass('active');

            $(".scroll-container").addClass('inactive');
            $(".homepageback").addClass('active');
            $(".projectsback").addClass('active');
            $(".resumeback").addClass('active');
            $("#resume-big-big").addClass('active');
            $("#homepage-big").addClass('active');
            
            $(".mainmenu-program").removeClass('active');
            $(".mainmenu-comm").removeClass('active');
            $("#projects-big").removeClass('active');
            
            $('#scene').fullpage.setAllowScrolling(false);

        }
    }

    function menuoff(){
             if(menuvisual){
                $(menu).removeClass('menu-active');
                $(p1).removeClass('p1-active');
                $(p2).removeClass('p2-active');
                $(p3).removeClass('p3-active');
                $("#red-bg").removeClass('active');
                $("#transparent-bg").removeClass('active');

                $(".brief").removeClass('active');
                $("#projects").removeClass('active');
                $("#resume").removeClass('active');
                $("#homepage").removeClass('active');
                $(".mainmenu-text").removeClass('active');
                $("#homepageMenu").removeClass('visible');

                $(".homepageback").removeClass('active');
                $(".projectsback").removeClass('active');
                $(".resumeback").removeClass('active');
                $("#resume-big-big").removeClass('active');
                $("#homepage-big").removeClass('active');          
                $(".mainmenu-program").removeClass('active');
                $(".mainmenu-comm").removeClass('active');
                $("#projects-big").removeClass('active');

            }else{
                $(menu).addClass('menu-active');
                $(p1).addClass('p1-active');
                $(p2).addClass('p2-active');
                $(p3).addClass('p3-active');
                $("#red-bg").addClass('active');
                $("#transparent-bg").addClass('active');
                $(".homepage").addClass('inactive');
                $("#homepageMenu").addClass('inactive');
                $(".brief").addClass('active');
                $("#resume").addClass('active');
                $("#homepage").addClass('active');
                $(".mainmenu-text").addClass('active');
                $("#homepageMenu").removeClass('visible');
                $(".homepageback").addClass('active');
                $(".projectsback").addClass('active');
                $(".resumeback").addClass('active');
                $("#resume-big-big").addClass('active');
                $("#homepage-big").addClass('active');


                $(".mainmenu-program").removeClass('active');
                $(".mainmenu-comm").removeClass('active');
                $("#projects-big").removeClass('active');
            }

    }
    function homeoff(){

            $("#red-bg").addClass('active');
            $("#transparent-bg").removeClass('active');

            $(".brief").removeClass('active');
            $("#projects").removeClass('active');
            $("#resume").removeClass('active');
            $(".homepage").addClass('inactive');
        
            $(".mainmenu-text").removeClass('active');
             $("#homepageMenu").removeClass('visible');
            $("#homepageMenu").addClass('inactive');
    
            $(".homepageback").removeClass('active');
            $(".projectsback").removeClass('active');
            $(".resumeback").removeClass('active');
            $("#resume-big-big").removeClass('active');
            $("#homepage-big").removeClass('active');          
            $(".mainmenu-program").removeClass('active');
            $(".mainmenu-comm").removeClass('active');
            $("#projects-big").removeClass('active');
            

    
}

    bigprojects.on('click',function(){
        bigprojects.toggleClass('active');
        $(".mainmenu-program").toggleClass('active');
        $(".mainmenu-comm").toggleClass('active');
    })

    bigresume.on('click',function(){
//        bigresume.toggleClass('active');
        window.location.hash="#Resume";
        
    })


    bighomepage.on('click',function(){
        console.log(menuvisual);     
        menuvisual=!menuvisual;
        menuon(); 
        window.location.hash="";
    })

    $(".pgback").on('click',function(){
        window.location="#PG";
    })
    $(".cdback").on('click',function(){
        window.location="#CD";
    })




    gmailbar.hover(function(){
          gmailangle.toggleClass('trianglerotate');
          gmailback.toggleClass('gmailbacactive');
    })

    youtube.hover(function(){
          youtubebc.toggleClass('active');
    })
    facebook.hover(function(){
          facebookbc.toggleClass('active');
    })
    github.hover(function(){
          githubbc.toggleClass('active');
    })
    link.hover(function(){
          linkbc.toggleClass('active');
    })
    gmailbar.on('click',function(event){
        var email = 'test@theearth.com';
        var subject = 'Circle Around';
        var emailBody = 'Some blah';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    })

