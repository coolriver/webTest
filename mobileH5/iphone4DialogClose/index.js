$(function () {
    $body = $(document.body);
    $html = $("html");
    var isIphone4 = true;
    $body.on('touchmove', '.dialog-head, .dialog-foot', function (e){
        e.preventDefault();
    }).on('click', '.close', function (e) {
        

        if (isIphone4) {
            $('#mask').remove();
            $('.dialog-head').remove();
            $('.dialog-foot').remove();
            $('.yes').remove();
            $(this).remove();
            $('.dialog').css({
                background: "transparent"
            });
            setTimeout(function() {
                $('.dialog').remove();
            }, 50);
        } else {
            $("#mask").remove();
            $(".dialog").remove();
        }

      //  unlockBody();
    }).on('touchmove', function (e) {
        /*console.log("body touchmove");*/
    });



$body.append('<div class="dialog">\
        <a href="javascript:;" class="js-close pl-close"><i class="i-close icon-font"></i></a>\
        <div class="dialog-head">\
            \
        </div>\
        <div class="dialog-body">\
            <ul>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
                <li>aaaaaaaaa</li>\
            </ul>\
        </div>\
        <div class="dialog-foot">\
            <a class="yes" href="javascript:;">确定</a>\
            <a class="close" href="javascript:;">关闭</a>\
        </div>\
    </div>');

   // lockBody();

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
});