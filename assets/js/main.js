$(document).ready(function() {

    function pickDept() {
        let form = $("#form1"),
            dept = $("#dept");

        //remember to add actual action
        switch (dept.prop('selectedIndex')) {
            case 0:
                form.attr("action", "https://formspree.io/customerservice@ips-llc.net");
                break;
            case 1:
                form.attr("action", "https://formspree.io/sales@ips-llc.net");
                break;
        }
    }

    $("#dept").change(function() {
        pickDept();
    });

    $('.landing-area-container h1').mouseover(function() {
        $('#arrow').addClass('arrow-hover');
    });
    $('.landing-area-container h1').mouseout(function() {
        $('#arrow').removeClass('arrow-hover');
    });
    $('.landing-area-container h1').on('click', function() {
        $('#arrow').removeClass('arrow-hover');
    });

    $('#dropdown-link').click(function(event) {
        event.preventDefault();
    });

    $('#nav-toggle').click(function(event) {
        event.preventDefault();
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
        var pos = $(id).offset().top - 70;

        // animated top scrolling
        $('body, html').animate({
            scrollTop: pos
        });
    });
});