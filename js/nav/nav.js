'use strict';

(function () {
    $(document).ready(function () {
        $('.navRight ul li a').each(function () {
            if ($(this)[0].href == window.location) {
                $(this).addClass('active').siblings().removeClass("active");
            }
        });
    });
    // 滚动改变导航颜色
    $(window).scroll(function () {
        if ($(window).scrollTop() > 48) {
            $('.navRight ul li a').css('color', 'black');
            $('.nav').addClass('nav-animate');
            $('.navLeft img').attr('src', '/img/index/Log2.png');
            $('.navLeft img').css('width', '60%');
            $('.active').css('color', 'red');
        } else {
            $('.navRight ul li a').css('color', '#ccc');
            $('.nav').removeClass('nav-animate');
            $('.navLeft img').attr('src', '/img/index/Logo.png');
            $('.navLeft img').css('width', '100%');
            $('.active').css('color', 'white');
        }
    });
})();