$(document).ready(function() {
    $(window).on('hashchange',function(){
        render(decodeURI(window.location.hash));
    })
    loadData(); 
});

    var homeprojects=[]; 
    var homepagedotsanchors=[];
    var programprojects=[];
    var commprojects=[];
    var firstopen=true;
    function loadData(){
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
            
            $('#scene').fullpage({
            anchors:['page1dot', 'page2dot', 'page3dot'],
            menu:'#homepageMenu',
            lockAnchors: true,
            controlArrows: true,
            }); 
            var parallax = new Parallax(scene);
            
        })
        .fail(function(){
            console.log("commfailed");
        });   
  
        $(window).trigger('hashchange');
    }
    

    function generateprogramProjectsHTML(data){

        var PGlist=$('.PGpage');
        var PGpage=$('#PG-template').html();
        var PGtemplate=Handlebars.compile(PGpage);
        PGlist.append(PGtemplate(data));
        
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
        
       var checkoutbar = $('.check-out');
        var checkoutback = $('.check-out-back');      
        checkoutbar.hover(function(){
        checkoutback.toggleClass('active');  
       })
 
    }

    function generatecommProjectsHTML(data){
        var CDlist=$('.CDpage');
        var CDpage=$('#CD-template').html();
        var CDtemplate=Handlebars.compile(CDpage);
        CDlist.append(CDtemplate(data));
        
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
                console.log('1111')
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
    $("#homepage-big").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(true);
    menuon();
}
function renderresumepage(){
    $(".resumepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $("#resume-big").addClass('hilight');
    $('#scene').fullpage.setAllowScrolling(false);
    firstopen=false;
}

function renderSingleProgramPage(index,data){
     $(".singlepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $('#scene').fullpage.setAllowScrolling(false);
    firstopen=false;


}
function renderSingleCommunicationPage(index,data){
     $(".singlepage").addClass('visible');
    menuvisual=true;
    menuoff();
    $('#scene').fullpage.setAllowScrolling(false);
    firstopen=false;

}

function renderresentPage(index,data){
     $(".singlepage").addClass('visible');
    homeoff();
    console.log("renderingresentpage");
    $('#scene').fullpage.setAllowScrolling(false);
    firstopen=false;
}

