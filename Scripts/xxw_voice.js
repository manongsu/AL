var y1;var flag = 0;var int;var timeOut5;var timeOut50
$(function () {

    function reset() {
        clearInterval(int);
        clearTimeout(timeOut5);
        clearTimeout(timeOut50);
        $(".xxw_voice p").html("按住说话");
        $(".xxw_speak").css("display","none");
        $(".xxw_countdown").css("display","none");
        $(".xxw_countdown h3").html(10+"<span>S</span>");
        flag=0;
    }
    function success() {
        $(".xxw_voice ul").css("display","block");
        $(".xxw_voice ul").append('<li><img src="../Images/6-6/xxw_listen.png" alt=""/><i><img src="../Images/6-6/xxw_close.png" alt=""></i></li>');
        if($(".xxw_voice ul li").length==5){
            $(".xxw_voice p").css({
                "color":"#999",
                "border":"1px solid #999"
            })
        }
    }
    $(".xxw_voice p").on('touchstart',function(e){
        if($(".xxw_voice ul li").length<5){
            timeOut5 = setTimeout(function () {
                var $touch = e.originalEvent.targetTouches[0];
                y1= $touch.pageY;
                $(".xxw_speak").css("display","block");
                $(".xxw_voice p").html("松开结束");
                flag = 1;
                timeOut50 = setTimeout(function () {
                    $(".xxw_speak").css("display","none");
                    $(".xxw_countdown").css("display","block");
                    var time  =10;
                    int = setInterval(function () {
                        time--;
                        $(".xxw_countdown h3").html(time+"<span>S</span>");
                        if(time==0){
                            success();
                            reset();
                        }
                    },1000);
                },50000)
            },500);
        }
        e.preventDefault();
        return false;
    });
    $(".xxw_voice p").on('touchmove',function(e){
        var $touch = e.originalEvent.targetTouches[0];
        var y2 = $touch.pageY;
        if(y1-y2>20){
            reset();
        }
    });
    $(".xxw_voice p").on('touchend',function(e){
        if(flag==1){
            reset();
            success();
        }
    });
    $(document).on("click",".xxw_voice i",function () {
        $(this).parent().remove();
        if($(".xxw_voice li").length==0){
            $(".xxw_voice ul").css("display","none");
        }
    })
})
