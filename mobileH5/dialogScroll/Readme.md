弹出框中的滚动事件冒泡导致body也滚动
---
![qq 20150731154952](https://cloud.githubusercontent.com/assets/4986245/9002924/e2194690-379b-11e5-991b-a7cfaa111e4b.png)
如图所示，当弹出框内容在滚动时，如果滚动到边界，会导致页面内容也会跟着滚动。

* ***尝试解决但失败的方案***：  
（使用zepto）在弹出的对话框元素上捕获事件，并阻止冒泡（stopPropagation），虽然阻止冒泡后，在body上没有监测到touchmove事件，但是页面内容还是会被带着滚动。  

* **成功解决方案一**：  
在显示对话框时，将html和body的height都设置为100%，overflow都设置为hidden，然后在对话框关闭时将html和body的height与overflow属性都设置为auto。  
打开对话框和关闭对话框后分别执行的函数：
```javascript
    function lockBody() {
        $body.css({
            height: "100%",
            overflow: "hidden"
        });

        $html.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    function unlockBody() {
        $body.css({
            height: "auto",
            overflow: "auto"
        });
        $html.css({
            height: "auto",
            overflow: "auto"
        });
    }
```
这种方案最先想到，但这种方案比较麻烦，需要使用js在对话框显示与关闭时更改元素的css，性能会受影响。

* **成功解决方案二**：  
在body内加一层div.scroll-wrapper，这个div包含页面的所有显示内容但不包含弹出框，.scroll-wrapper和html还有body的height都为100%，html和body的overflow为hidden，.scroll-wrapper的overflow为scroll。让.scroll-wrapper的div来控制页面内容的滚动。因为弹出框是通过fix布局不属于.scroll-wrapper的子元素，所以滚动不会冒泡到.scroll-wrapper上。  
DOM结构：
```html
<body>
    <div class="scroll-wrapper">
        <div class="banner">
            banner
        </div>
        <div class="content">
            <p>p </p>
        </div>
    </div>
    <div id="mask">
    </div>
    <div class="dialog">
        <div class="dialog-head">
            
        </div>
        <div class="dialog-body">
            <ul>
                <li>aaaaaaaaa</li>
            </ul>
        </div>
        <div class="dialog-foot">
            <a href="javascript:;">确定</a>
            <a class="close" href="javascript:;">关闭</a>
        </div>
    </div>
    <script src="zepto.js" ></script>
    <script src="index.js" ></script>
</body>
```
CSS:
```css
.scroll-wrapper {
    height: 100%;
    width: 100%;
    overflow: scroll;
}

html, body {
    height: 100%;
    overflow: hidden;
}
```
这种方法不需要使用js逻辑来控制，只用加一个div元素并设置相应的css进行控制。
