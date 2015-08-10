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
        console.log("body touchmove");
    });

    $('.dialog-body').on('touchmove', 'li' , function (e) {
        console.log("dialog scroll");
        e.stopPropagation();
    });



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