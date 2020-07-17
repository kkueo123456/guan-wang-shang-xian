'use strict';

(function () {
    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            //自动播放
            autoplay: {
                delay: 2000
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });
})();