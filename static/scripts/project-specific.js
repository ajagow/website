$(document).ready(function(){



    // // fade in animation
    $(document).on("scroll", function () {
        check();

          
        });

$('#reset-btn').on('click', function(event) {
        $("html, body").animate({scrollTop: 0}, 1000);

        window.setTimeout(function() {reset();}, 200);
        
    
});

function check() {
    var pageTop = $(document).scrollTop();
        var height = $(window).height();

        var docHeight = $(document).height() + 199.35975;

        var bottom = $('#spaceship').position().top+$('#spaceship').offset().top+$('#spaceship').outerHeight(true);

         if (bottom > (docHeight - 50)) {
            window.setTimeout(function(){$('#spacebro').addClass("fade");}, 500);
            $('.reset').addClass("fade-in");
            window.setTimeout(function(){$('#spacebro').addClass("move");}, 1000);

        }
}

function reset() {

        window.setTimeout(function(){
            $('.reset').removeClass("fade-in");
            $('#spacebro').removeClass("move");
            $('#spacebro').removeClass("fade");} , 1500);
}


$('#process-btn').on('click', function(event) {
    var target = $('#process-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('#tools-btn').on('click', function(event) {
    var target = $('#tools-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('#product-btn').on('click', function(event) {
    var target = $('#product-content');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('.next-btn').on('click', function(event) {

    var target = $(this).closest('.mt-10').next('.mt-10');
    console.log(target);
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    }
});

$('.gallery img').click(function() {
    var src = $(this).attr('src');
    $('#current-image').attr('src', src);
    $('#box').attr('src', src);

    var index = $(this).index() - 1;
    var width = $('.gallery-tab').outerWidth();
    var move = index * width + index * 10;



    $('.slide-line').css({
        "left": move
      });
});

$('#open-btn').on('click', function(event) {

    $('.lightbox-target').addClass("visible");
        
    
});

$('#close-box').on('click', function(event) {

    $('.lightbox-target').removeClass("visible");
        
    
});

$('#goofy').on('click', function(event) {

    $('.lightbox-target').removeClass("visible");
        
    
});










});