$(document).ready(function() {
    function pickDept() {
        let form = $("#form1"),
            dept = $("#dept");
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

    $('.prevent-default').click(function(event){
        event.preventDefault();
    });
    
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $(id).offset().top - 70;
        $('body, html').animate({
            scrollTop: pos
        });
    });
});