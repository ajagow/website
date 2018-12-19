$(document).ready(function(){


$('#down').on('click', function(event) {
    var target = $('#navigationDiv');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$(window).scroll(function(){


    let top = $(window).scrollTop();
    let height = $(window).height();
    let factor = top/height;
    let val = factor * 100 * 2 - 100;


  $("#moon").stop().animate({"bottom":  val + "px"});

if ($(window).scrollTop() > $('body').height() / 4) {
    $('#spacebro').addClass('move');
    $('.reset').addClass("fade-in");
  }
  else {
    $('#spacebro').removeClass('move');
    $('.reset').removeClass("fade-in");
  }
});

});