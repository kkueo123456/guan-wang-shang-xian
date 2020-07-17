"use strict";

(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html');
    $(".footer").load('../footer.html');
    //    头部划过蒙版
    $('.mb-wrap').hover(function () {
        $(this).children('.list-mengban').animate({
            "opacity": 1
        }, "fast");
    }, function () {
        $(this).children('.list-mengban').animate({
            "opacity": 0
        }, "fast");
    });
    var user = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "iPad", "iPod"];

    $('.bags-list .bags-list-wrap').click(function () {
        //判断是否存在手机标识
        var phone = Agents.map(function (value) {
            return user.indexOf(value);
        });
        var hasphone = phone.filter(function (value) {
            return value > 0;
        });
        if (hasphone != '') {
            $(location).attr('href', 'taobao://m.tb.cn/h.VpzFyOI?sm=d1b674');
        } else {
            $(location).attr('href', 'https://shop67625920.taobao.com/?spm=a230r.7195193.1997079397.13.3e103b12Mx4NP3', '_blank');
        }
    });
})();