// 必须设置run_at=document_start才能执行
document.addEventListener('DOMContentLoaded', function() {
    // 注入自定义JS
    // injectCustomJs();
    var host = location.host;
    if(host === 'link.zhihu.com') {
        var button = document.querySelector('.actions > a');
        if(!!button) {
            button.click();
        }
    } else if (host === 't.cn') {
        var button = document.querySelector('.open-url > a');
        if(!!button) {
            button.click();
        }
    } else if (host === 'weixin110.qq.com') {
        var button = document.querySelector('.weui-btn_default')
        if(!!button) {
            button.click();
        }
    } else if (host === 'www.oschina.net') {
        var button = document.querySelector('.link-button')
        if(!!button) {
            button.click();
        }
    }
})


function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    // temp.onload = function()
    // {
    //     // 放在页面不好看，执行完后移除掉
    //     this.parentNode.removeChild(this);
    // };
    document.body.appendChild(temp);
}