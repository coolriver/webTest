$(function () {
    $body = $(document.body);
    $html = $("html");

    $body.on('touchmove', '.dialog-head, .dialog-foot', function (e){
        e.preventDefault();
    }).on('click', '.close', function (e) {
        $("#mask").hide();
        $(".dialog").hide();
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