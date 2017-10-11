$(document).ready(function() {


    $('.section-features').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px;'
    });


    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.section-plans').offset().top }, 1000);
    });


    $('.js-scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 1000);
    });




    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });




    /*-------Animation on scroll-----------*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');

    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');

    }, {
        offset: '70%'
    });


    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');

    }, {
        offset: '70%'
    });



});