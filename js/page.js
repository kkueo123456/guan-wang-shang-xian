(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _public = require('./public/public.js');

var _public2 = _interopRequireDefault(_public);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var mima = 1;
    //引入导航栏
    $(".indexNav").load('../nav.html');
    $(".footer").load('../footer.html');
    var get = window.location.search;
    var id = get.substring(4);
    $.ajax({
        'url': _public2.default.PageMainUrl,
        'type': 'get',
        'dataType': 'json',
        data: {
            id: id
        },
        'success': function success(data) {
            //设置时间
            var Time = data.Data[0].ShowDateTime;
            var reg = /[^0-9]/ig; //表示匹配^非 0-9的全部字符，全局不区分大小写
            var getTime = Time.replace(reg, "");
            var showTime = new Date(parseInt(getTime)).toLocaleString();
            //如果id存在做的操作
            if (id) {
                //文章内容
                $('.page-main').html(data.Data[0].ContentText);
                //发布时间
                $('.pageTit .pageTime').html(showTime);
                // 阅读量
                $('.pageTit .pageview').html(data.Data[0].Pageviews);
                // 标题
                $(".pageTit .tit").html(data.Data[0].Title);
                //上一篇
                $('.siblings .previous').html(data.Data[1].Title);
                //下一篇
                $('.siblings .next').html(data.Data[2].Title);
                //点击上下篇跳转
                $('.siblings p').click(function () {
                    var index = $(this).index() + 1;
                    if (data.Data[index].Id != 0) {
                        $(location).attr('href', '../page.html?id=' + data.Data[index].Id);
                    }
                });
            } else {
                $('.page-main').html('<h4 style="color:red;margin-top:20px;margin-bottom:5%">请从右侧选择文章</h4>');
            }
        }

    });
    //右侧导航滚动效果
    var rightList = document.querySelector('.right-list');
    // let chu = rightList.offsetTop
    if (rightList) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > rightList.offsetTop) {
                $('.right-list').css({
                    'position': 'fixed',
                    'top': 10
                });
            } else if ($(window).scrollTop() < 90) {
                $('.right-list').css({
                    'position': 'relative'
                });
            }
        });
    }

    //右侧导航内容
    $.ajax({
        url: _public2.default.pageListUrl,
        type: "get",
        dataType: "json",
        success: function success(data) {
            var listData = data.Data[0].List;
            //当前时间转换成时间戳
            var time = new Date().getTime();
            //空的容器
            var str = "";
            $(listData).each(function (index, value) {
                // 将传来的时间转换成时间戳
                var time2 = new Date(value.ShowDateTime).getTime();
                var shengTime = parseInt((time - time2) / 1000);
                //多少天前
                var ago = parseInt(shengTime / 86400);
                //列表数据
                str += '<li><div>' + value.Title + '</div>\n                <p class="ago">' + ago + '\u5929\u524D</p></li>';
            });
            $('.right-list ul').append(str);
            $('.right-list ul').on('click', 'li', function () {
                var listIndex = $(this).index();
                $(location).attr('href', '../page.html?id=' + listData[listIndex].Id);
            });
        }
    });
})();
},{"./public/public.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseUrl = "http://www.stscp.cn/";
var pageListUrl = baseUrl + 'html/ActicleList';

var PageMainUrl = baseUrl + 'html/ArticleDetails';

var phoneUrl = baseUrl + 'html/ContactUsAdd';
exports.default = {
  pageListUrl: pageListUrl,
  PageMainUrl: PageMainUrl,
  phoneUrl: phoneUrl
};
},{}]},{},[1]);
