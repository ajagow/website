$(document).ready(function(){






        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('nav').addClass('solid');
          } else {
              $('nav').removeClass('solid');
          }

          if ($(window).scrollTop() + $(window).height() > $('body').height() - 200) {
            $('#spacebro').addClass('move');
            $('.reset').addClass("fade-in");
          }
          else {
            $('#spacebro').removeClass('move');
            $('.reset').removeClass("fade-in");
          }
        });







});