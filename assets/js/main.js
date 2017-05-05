$(document).ready(function(){
    $('.landing-area-container h1').mouseover(function(){
        $('#arrow').addClass('arrow-hover');
    });
    $('.landing-area-container h1').mouseout(function(){
        $('#arrow').removeClass('arrow-hover');
    });
    $('.landing-area-container h1').on('click', function(){
        $('#arrow').removeClass('arrow-hover');
    });

    // smooth scrolling, implemented with the help of stack overflow
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $(id).offset().top - 80;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
});