    var menu = $('.menubutton');
    var p1 = $('.part-1');
    var p2 = $('.part-2');
    var p3 = $('.part-3');
    var gmailback= $('.gmailback');
    var gmailbar = $('.emailbar');
    var gmailangle = $('.eangle');
     var checkoutbar = $('.check-out');
    
    var youtube= $('.youtube');
    var facebook= $('.facebook');
    var github= $('.github');
    var link= $('.link');

    var checkoutback = $('.check-out-back');
    var youtubebc= $('.youtube-back');
    var facebookbc= $('.facebook-back');
    var githubbc= $('.github-back');
    var linkbc= $('.link-back');

    menu.on('click', function() {
      $(menu).toggleClass('menu' +'-active');
        $(p1).toggleClass('p1' +'-active');
        $(p2).toggleClass('p2' +'-active');
        $(p3).toggleClass('p3' +'-active');
        $("#red-bg").toggleClass('active');
        $("#transparent-bg").toggleClass('active');
        $("#homepageMenu").toggleClass('inactive');
        $(".homepage").toggleClass('inactive');
        $(".brief").toggleClass('active');
        $("#projects").toggleClass('active');
        $("#resume").toggleClass('active');
        $("#homepage").toggleClass('active');
        $(".mainmenu-text").toggleClass('active');
        $(".mainmenu-program").toggleClass('active');
        $(".mainmenu-comm").toggleClass('active');
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

