$(document).ready(function(){




        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });



        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 100) { 
              $('nav').addClass('solid');
          } else {
              $('nav').removeClass('solid');
          }
        });


        function fadeInWords() {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".section")

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).position().top + 100 < pageBottom) {
              $(tag).addClass("visible")
            } else {
              $(tag).removeClass("visible")
            }
          }
      }

      fadeInWords();



        // fade in animation
      $(document).on("scroll", function () {
        fadeInWords();

      });



});