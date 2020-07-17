"use strict";

(function () {

    //针对ie11以下内核的弹框
    console.log(navigator.userAgent);
    function myBrowser() {
        //获取浏览器版本
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) {
            //判断是否IE6-9
            if (userAgent.indexOf("MSIE 6.0") > -1) {
                return "IE6";
            }
            if (userAgent.indexOf("MSIE 7.0") > -1) {
                return "IE7";
            }
            if (userAgent.indexOf("MSIE 8.0") > -1) {
                return "IE8";
            }
            if (userAgent.indexOf("MSIE 9.0") > -1) {
                return "IE9";
            }
            if (userAgent.indexOf("MSIE 10.0") > -1) {
                return "IE10";
            }
            return "IE";
        }
        if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1) {
            //判断是否IE10-11
            if (userAgent.indexOf("rv:10.0") > -1) {
                return "IE10";
            }
            if (userAgent.indexOf("rv:11.0") > -1) {
                return "IE11";
            }
            return "IE11";
        } else {
            return userAgent;
        }
    }
    var mb = myBrowser();
    if (mb.indexOf("IE") > -1) {
        if (mb.replace("IE", "") <= 11) {
            alert("您的浏览器内核不兼容，请更换浏览器为谷歌、火狐或使用360浏览器的极速模式");
        }
    }
    //判断当前设备是否为手机,底部淘宝跳转进行相应改变
    var user = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "iPad", "iPod"];
    for (var i = 0; i < Agents.length; i++) {
        if (user.indexOf(Agents[i]) > 0) {
            $('.advHover a').eq(2).attr('href', 'taobao://m.tb.cn/h.VpzFyOI?sm=d1b674');
        }
    }
    $('.douyin').hover(function () {
        $(this).children('.weCheat-img').css('display', 'block');
    }, function () {
        $(this).children('.weCheat-img').css('display', 'none');
    });
})();