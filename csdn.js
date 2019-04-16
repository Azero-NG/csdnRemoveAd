// ==UserScript==
// @name         CSDN极致去广告
// @namespace    http://tampermonkey.net/
// @version      1.21
// @description  CSDN去广告（除了文章其他全去）
// @author       Azero
// @match        http*://blog.csdn.net/*/article/details/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';
    //添加watch功能
    if (!Object.prototype.watch) {
        Object.defineProperty(Object.prototype, "watch", {
              enumerable: false
            , configurable: true
            , writable: false
            , value: function (prop, handler) {
                var
                  oldval = this[prop]
                , newval = oldval
                , getter = function () {
                    return newval;
                }
                , setter = function (val) {
                    oldval = newval;
                    return newval = handler.call(this, prop, oldval, val);
                }
                ;
    
                if (delete this[prop]) { // can't watch constants
                    Object.defineProperty(this, prop, {
                          get: getter
                        , set: setter
                        , enumerable: true
                        , configurable: true
                    });
                }
            }
        });
    }
    //变量值锁定
    function staticValue(name,val) {
        unsafeWindow.watch(name,function(id, old, cur) {
            return val;
    });
    }
    unsafeWindow.currentUserName = "azero"
    staticValue("currentUserName","azero");

    //页面加载完成监听事件
    // document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
    unsafeWindow.addEventListener ("load", pageFullyLoaded);
    //加载完成后运行
    function pageFullyLoaded () {
        if (GM_getValue("csdnNotifi",true)==true)
        {
            window.alert("请点击网页空白处");
            $('body')[0].addEventListener("click", function () {
                if(!confirm("CSDN极致去广告脚本已更新\n为解决csdn反广告问题\n本脚本需要配合abp类插件并添加过滤列表\n请查看项目主页获取教程\n是否再次提示(取消即不再提示,确认将打开项目主页)"))
                GM_setValue("csdnNotifi",false);
            else
                window.open('https://github.com/Azero-NG/csdnRemoveAd/blob/master/abp%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%87%E6%BB%A4%E5%99%A8.md');
                GM_setValue("csdnNotifi",false);
            });

        }
        else
        {
            //阅读全文
            $('#article_content').removeAttr("style");
            $('.hide-article-box').remove();
            //移除左侧
            $('aside').remove();
            //下方广告
            $('.pulllog-box').remove();
            $('.p4course_target').remove();
            //下部推荐
            $('.recommend-box').remove();
            $('.t0').remove();
            //上方工具栏
            $('#csdn-toolbar').remove();
            //右侧菜单
            $('.tool-box').remove();
            //右侧推荐
            $('.recommend-right').remove();
            //vip免广告 按钮
            $('.meau-gotop-box').remove();
            //未登录提示
            $('.unlogin-box').remove();
            //评论上方广告
            $('#dmp_ad_58').remove();
            //去版权
            $('.article-copyright').remove();
            //右侧第四栏
            $('.fourth_column').remove();
            //评论自动展开
            $('#btnMoreComment').click();
            //居中
            $("main").css("float","none");
            $("main").css("margin","auto");
            //去除剪切板劫持
            csdn.copyright.init("", "", ""); 
        }
    }
    

})();
