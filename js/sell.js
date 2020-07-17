(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

var _public = require('./public/public.js');

var _public2 = _interopRequireDefault(_public);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html');
    $(".footer").load('../footer.html');
    //留言
    // 手机号判断
    function zz(val) {
        var reg = /^1[0-9]{10}$/;
        if (reg.test(val) == false) {
            return false;
        }
        return true;
    }
    $('.form-group #phone').blur(function () {
        if (zz($('.form-group #phone').val())) {
            $(this).css("border", "1px solid #67c23a");
            $(this).siblings('#telHelp').html('');
        } else if ($('.form-group #phone').val() == "") {
            $(this).css("border", "1px solid red");
            $(this).siblings('#telHelp').html('手机号不能为空');
        } else {
            $(this).css("border", "1px solid red");
            $(this).siblings('#telHelp').html('请输入正确手机号');
        }
    });
    //姓名判断
    $('.form-group #Name').blur(function () {
        if ($('.form-group #Name').val() == "") {
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "1px solid #67c23a");
        }
    });
    //留言判断
    $('.form-group #exampleFormControlTextarea1').blur(function () {
        if ($('.form-group #exampleFormControlTextarea1').val() == "") {
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "1px solid #67c23a");
        }
    });
    //提交按钮
    $('.btn').click(function () {
        zz($('.form-group #phone').val());
        var name = $('.form-group #Name').val();
        var tel = $('.form-group #phone').val();
        var text = $('.form-group #exampleFormControlTextarea1').val();

        if ($('.form-group #Name').val() == "" || $('.form-group #phone').val() == "" || $('.form-group #exampleFormControlTextarea1').val() == "") {
            toastr.error("缺少必填信息");
        } else if (zz($('.form-group #phone').val()) == false) {
            toastr.error("手机号格式不正确");
        } else {
            //加载动画开始
            $('.wrap .spinner-border').show();
            $.ajax({
                url: _public2.default.phoneUrl,
                type: "post",
                data: {
                    name: name,
                    mobile: tel,
                    contentText: text,
                    ip: returnCitySN["cip"],
                    citySN: returnCitySN["cname"]
                },
                success: function success(data) {
                    //取消加载动画
                    if (data) {
                        $('.wrap .back .spinner-border').css('display', 'none');
                    }
                    if (data.Status == "y") {
                        toastr.success(data.Msg);
                        $('.form-group #Name').val("");
                        $('.form-group #phone').val("");
                        $('.form-group #exampleFormControlTextarea1').val("");
                    } else {
                        toastr.warning(data.Msg);
                    }
                }
            });
        }
    });
})();
},{"./public/public.js":1}]},{},[2]);
