$(document).ready(function(){




    // // fade in animation
      $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop();
        var height = $(window).height();

        var docHeight = $(document).height() + 199.35975;

        var bottom = $('#spaceship').position().top+$('#spaceship').offset().top+$('#spaceship').outerHeight(true);

         if (bottom > (docHeight - 50)) {
              //$('#spacebro').addClass("fade");
              window.setTimeout(function(){$('#spacebro').addClass("fade");
                          $('.reset').addClass("fade-in");}, 800);
            } else {
                $('#spaceship').removeClass("fade");
                $('#spacebro').removeClass("fade");
                $('.reset').removeClass("fade-in")
            }

          





        if (pageTop > .75 * height) {
              $('#spaceship').addClass("fade");
            } else {
              $('#spaceship').removeClass("fade");

                $('#spacebro').removeClass("fade");
            }
          
        });

    function resetState() {


        window.setTimeout(function(){
                    console.log("fade bro");
            $('.reset').removeClass("fade-in");
            $('#spacebro').removeClass("fade");} , 1000);
    }

    // var reset = false;



    // // // fade in animation
    //   $(document).on("scroll", function () {
    //     var pageTop = $(document).scrollTop();
    //     var height = $(window).height();

    //     var docHeight = $(document).height() + 199.35975;

    //     var bottom = $('#spaceship').position().top+$('#spaceship').offset().top+$('#spaceship').outerHeight(true);

    //      if (bottom > (docHeight - 50)) {
    //           //$('#spacebro').addClass("fade");
    //           reset = false;
    //           window.setTimeout(function(){$('#spacebro').addClass("fade");
    //                       $('.reset').addClass("fade-in");}, 800);
    //         } 

          





    //     if (pageTop > .75 * height) {
    //           $('#spaceship').addClass("fade");
    //         } else {
    //           $('#spaceship').removeClass("fade");
    //           if(reset) {
    //             $('#spacebro').removeClass("fade");
    //           }
    //         }
          
    //     });

    // function resetState() {
    //     reset = true;

    //     window.setTimeout(function(){
    //                 console.log("fade bro");
    //         $('.reset').removeClass("fade-in");
    //         $('#spacebro').removeClass("fade");} , 1000);
    // }

    $('#reset-btn').on('click', function(event) {
        $("html, body").animate({scrollTop: 0}, 1000);

        window.setTimeout(function(){resetState()} , 1000);
        
    
        });

$('#art-btn').on('click', function(event) {
    var target = $('#art-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('#school-btn').on('click', function(event) {
    var target = $('#school-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('#coding-btn').on('click', function(event) {
    var target = $('#coding-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('#random-btn').on('click', function(event) {
    var pages = ['projects/colorxflo.html', 'projects/animator.html', 'projects/2d.html',
    'projects/movies.html', 'projects/tabby.html'];

    var page = pages[Math.floor(Math.random()*pages.length)];


    window.location.href = page;
});




});