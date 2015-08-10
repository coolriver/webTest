iphone4中关闭内容可滚动的弹出框时卡顿
---
**在iphone4中QQ打开页面**，关闭包含可滚动的div的对话框时，会先将可滚动的div删除，然后再删除对话框的其它元素，看起来就像对话框中可滚动的内容先变为空，然后对话框才消失。

### 解决方案：将滚动内容延迟关闭
既然iphone4会先执行删除滚动内容，那么就让滚动内容强制延时关闭，延时时长经过尝试在50ms最佳，看起来像同其它对话框内容关闭。  

解决方案代码：  

```javascript
//关闭时执行如下操作
if (isIphone4) {
    $('#mask').remove();
    $('.dialog-head').remove();
    $('.dialog-foot').remove();
    $('.yes').remove();
    $(this).remove();
    $('.dialog').css({
        background: "transparent"
    });
} else {
    $("#mask").remove();
    $(".dialog").remove();
}
```


