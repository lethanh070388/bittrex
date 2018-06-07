$(function(){
    $('.row-key').click(function(){
        $(this).next().toggleClass('hidden-row');
    });

    /******************************
      EXPAND MENU MARKET DETAIL
    ******************************/

    $('.toggle_icon_navbar').click(function(){
        $('.main_nav').toggleClass('hidden');
        $('.main_nav').toggleClass('visible');
    });
    $(window).resize(function(){
        if ($(window).width() < 1199) {
            $('.main_nav').addClass('hidden');
            $('.main_nav').removeClass('visible');
        }
        else{
            $('.main_nav').addClass('visible');
            $('.main_nav').removeClass('hidden');
        }
    });
    /******************************
      BOTTOM SCROLL TOP BUTTON
    ******************************/

    // declare variable
    var scrollTop = $(".to_top");

    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD
});


/******************************
     SCROLL BAR AUTO HIDE
******************************/