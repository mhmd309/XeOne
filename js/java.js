$(function () {
    'use strict';
    // Add Class Active On Link and Remove class Active On Siblings
    $('.header .navbar .navbar-nav .nav-link').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    // navbar add class scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    // Sync Navbar Links with Section
    $(window).scroll(function () {
        $('.blocked').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 40) {
                $('.header .navbar .navbar-nav .nav-link').removeClass('active');
                $('.header .navbar .navbar-nav .nav-link[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    // addClass Listclient Clients
    $('.clients .list-clients li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Show And Hide
    $('.clients .list-clients li').click(function () {
        $('.clients .content-clients > div').hide();
        $($(this).data('click')).show();
    });
    // ScrollTop Hide And Show
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    // ScrollTop Up
    $('#scrollTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
});
