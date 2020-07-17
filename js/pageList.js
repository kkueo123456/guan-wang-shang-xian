(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _public = require('./public/public.js');

var _public2 = _interopRequireDefault(_public);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html');
    $(".footer").load('../footer.html');
    var page = 1;
    //文章主体分页功能
    changePage();
    changePageNum();
    //分页按钮
    function changePageNum() {
        $.ajax({
            url: _public2.default.pageListUrl,
            type: "get",
            dataType: "json",
            success: function success(data) {
                //判断页码个数
                var len = Math.ceil(data.Data[0].AllCountNum / 8) > 7 ? 7 : Math.ceil(data.Data[0].AllCountNum / 8);
                if (page > len) {
                    len = page;
                }
                //形成分页栏
                var str2 = '';
                for (var i = page; i <= len; i++) {
                    str2 += '<span>' + i + '</span>';
                }
                $('.pagenum2').html(str2);
                $('.pagenum b').html('\u5171' + Math.ceil(data.Data[0].AllCountNum / 8) + '\u9875');
                // 首个页码增加样式
                $('.pagenum2 span').eq(0).addClass('active2');
                //页码点击时的操作 
                $('.pagenum2').on('click', 'span', function () {
                    page = $(this).html();
                    changePage();
                    console.log(this);
                    $(this).addClass('active2').siblings().removeClass('active2');
                });
            }
        });
    }
    // 主体列表
    function changePage() {
        $.ajax({
            url: _public2.default.pageListUrl,
            type: "get",
            data: {
                page: page
            },
            dataType: "json",
            success: function success(data) {
                var listData = data.Data[0].List;
                var str = "";
                $(listData).each(function (index, value) {
                    str += '<li><div class=\'pageMain-img col-4\'><img src=\'' + value.FirstImg + '\' alt=\'\' class=\'img-responsive\'></div><div class=\'pageMain-text col-8\'><h5>' + value.Title + '</h5><div class=\'time\'>' + value.ShowDateTime + '</div></div></li>';
                });
                $('.pageMain-body ul').html(str);
                //点击跳转
                $('.pageMain-body ul').on('click', 'li', function () {
                    var listIndex = $(this).index();
                    var index = sessionStorage.setItem('index', listData[listIndex].Id);
                    $(location).attr('href', '../page.html?id=' + listData[listIndex].Id);
                });
                if (listData == "") {
                    alert("翻过页了，没有这么多页，请跳转回第一页");
                    $('.pageMain-body ul').html('<h4 style="color:red;margin-top:20px;margin-bottom:5%;text-align:center">请跳转回去</h4>');
                }
            }
        });
    }
    //跳页操作
    $('.pageMain-body .jumpStart').click(function () {
        page = $('.pageJump').val();
        changePage();
        changePageNum();
        $('.pageJump').val("");
    });
    //上一页
    $('.reducePage').click(function () {
        page--;
        if (page <= 0) {
            alert('已经是第一页了');
            return;
        }
        changePage();
        changePageNum();
    });
    //下一页
    $('.addPage').click(function () {
        page++;
        changePage();
        changePageNum();
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
