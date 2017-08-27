$(document).ready(function() {
    $(window).on('hashchange',function(){
        render(decodeURI(window.location.hash));
    })
    loadData(); 
//    $(window).on('hashchange',function(){
//        render(decodeURI(window.location.hash));
//    })
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
        $(window).trigger('hashchange');
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
        
        homepagelist.find('.check-out').on('click',function(e){
            e.preventDefault();
            var resentIndex=$(this).data('index');
            window.location.hash='resent/'+resentIndex;
        })
        
        var homeprojectcont= homeprojects.length; 
        for( i=homeprojectcont-homeprojectcont;i <= (homeprojectcont);i++){
            homepagedotsanchors[i]="page"+(i+1)+"dot";
        }
        console.log(homepagedotsanchors);
        var parallax = new Parallax(scene);
        
        $('#scene').fullpage({
            anchors:homepagedotsanchors,
            menu:'#homepageMenu',
            lockAnchors: true,
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
        
        programnamelist.find('li').on('click',function(e){
            e.preventDefault();
            var programsIndex=$(this).data('index');
            window.location.hash='programs/'+programsIndex;
            console.log(programsIndex);
        })
    }

    function generatecommProjectsHTML(data){
        var commnamelist=$('#comm-list');
        var commnames=$('#comms').html();
        var commtemplate=Handlebars.compile(commnames);
        commnamelist.append(commtemplate(data)); 
        commnamelist.find('li').on('click',function(e){
            e.preventDefault();
            var programsIndex=$(this).data('index');
            window.location.hash='communication/'+programsIndex;
            console.log(programsIndex);
        })
    }

    function render(url){
        var temp=url.split('/')[0];
        $('body .page ').removeClass('visible');
        $('#resume-big').removeClass('hilight');
        $('#homepage-big').removeClass('hilight');
        $('#projects-big').removeClass('hilight');
        $('#program-title').removeClass('hilight');
        $('#projects-big').removeClass('hilight');
        $('#comm-title').removeClass('hilight');
        var map={
            '':function(){
                renderhomepage();
            },
            
            '#PG':function(){
                renderpgpage();
            },
            '#CD':function(){
                rendercdpage();
            },
            
            '#Resume':function(){
                renderresumepage();

            },
            '#programs':function(){
                var index=url.split('#programs/')[1].trim();
                renderSingleProgramPage(index,programprojects);
            },
            '#communication':function(){
                var index=url.split('#communication/')[1].trim();
                renderSingleCommunicationPage(index,commprojects);
            },
            '#resent':function(){
                var index=url.split('#resent/')[1].trim();
                renderresentPage(index,homeprojects);
            }
        };
        if(map[temp]){
            map[temp]();
        }
        else{
            console.log("cannotrenderanypage");
        }
    }

function renderhomepage(){
    $(".homepage").addClass('visible');
    $("#homepageMenu").addClass('visible');
    menuon();
    $("#homepage-big").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(true);
}
function renderresumepage(){
    $(".resumepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $("#resume-big").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(false);
}

function renderpgpage(){
    $(".PGpage").addClass('visible');
    menuvisual=true;
    menuoff();
    $("#projects-big").addClass('hilight');
    $("#program-title").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(false);
 
}

function rendercdpage(){
    $(".CDpage").addClass('visible');
    menuvisual=true;
    menuoff();
    $("#projects-big").addClass('hilight');
    $("#comm-title").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(false);
}


function renderSingleProgramPage(index,data){
     $(".singlepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $('#scene').fullpage.setAllowScrolling(false);


}
function renderSingleCommunicationPage(index,data){
     $(".singlepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $('#scene').fullpage.setAllowScrolling(false);

}

function renderresentPage(index,data){
     $(".singlepage").addClass('visible');
    homeoff();
    console.log("renderingresentpage");
    $('#scene').fullpage.setAllowScrolling(false);
}

