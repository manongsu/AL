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
        $(".xxw_voice ul").append('<li><img class="play" src="../Images/6-6/xxw_listen.png" alt=""/><img class="play" src="../Images/6-6/xxw_listen.gif" style="display:none;" alt=""><i><img src="../Images/6-6/xxw_close.png" alt=""></i></li>');
        if($(".xxw_voice ul li").length==5){
            $(".xxw_voice p").css({
                "color":"#666",
                "border":"1px solid #bababa"
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
            },1000);
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
        clearTimeout(timeOut5)
        if(flag==1){
            reset();
            success();
        }
    });
    $(document).on("click",".xxw_voice i",function (e) {
        e.stopPropagation();
        $(this).parent().remove();
        $(this).parent().detach();
        if($(".xxw_voice li").length==0){
            $(".xxw_voice ul").css("display","none");
        }
        if($(".xxw_voice li").length<5){
            $(".xxw_voice p").css({
                "color":"#ff6000",
                "border":"1px solid #ff6000"
            })
        }
    });
    $(document).on("click",".xxw_voice li",function () {
        $(this).children(".play").toggle();
        $(this).siblings("li").children(".play:nth-child(1)").css("display","block");
        $(this).siblings("li").children(".play:nth-child(2)").css("display","none");
    })
})
