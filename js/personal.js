var TeamLength = 0;
var TaskLength = 0;
var ActivitysLength = 0;
var sumLength = 0;
//自适应
function sizechange() {
    function windowsize() {
        if ($(window).width() > 970) {
            $(".top-navigation").css("background", "transparent"); //导航栏透明
            Scroll(); //滚动导航栏变化
        } else {
            $(".top-navigation").css("background", "#343A40");
        }
    }
    windowsize();
    $(window).resize(function () {
        windowsize();
    })
}
//滑动变化
function Scroll() {
    $(document).scroll(function () {

        var scrollTop = $(document).scrollTop();
        var screenWidth = $(window).width();
        var scrollBottom = $(document).height() - $(window).height() - $(document).scrollTop();
        if (scrollTop < 50 && screenWidth > 767) {
            //顶部导航
            $(".top-navigation").css("background", "transparent");
            //各种中心导航
            $("#myform").css("background", "transparent");
        } else {
            //顶部导航
            $(".top-navigation").css("background", "#343A40");
            //各种中心导航
            $("#myform").css("background", "#343A40");
        }
        //个人中心消失
        $("#myform").css("display", "none");
    })
}
// 登录界面 加入团队 个人中心
function login() {
    //点击登录
    $(".login").on("click", function () {
        $("#loginbodymask").css("display", "block");
    });
    //登录模态框关闭
    $("#loginclose").on("click", function () {
        $(".bodymask").css("display", "none");
    });
    //微信
    $("#weixin").on("mouseenter", function () {
        $("#weixinicon").attr("xlink:href", "#icon-weixin1");
    });
    $("#weixin").on("mouseleave", function () {
        $("#weixinicon").attr("xlink:href", "#icon-weixin");
    });
    //qq
    $("#qq").on("mouseenter", function () {
        $("#qqicon").attr("xlink:href", "#icon-QQ");
    });
    $("#qq").on("mouseleave", function () {
        $("#qqicon").attr("xlink:href", "#icon-changyonglogo41");
    });
    //加入团队
    $("#myjoinbtn").on("click", function () {

        $("#myjoinmask").css("display", "block");
        $("#myjoinbtn").addClass('disabled');
        $("#myjoinbtn").prop('disabled', true);
    });
    $("#myjoin-close").on("click", function () {
        $("#myjoinmask").css("display", "none");
    });
    //登录
    $("#login-success").on("click", function () {
        $("#mybox").css("display", "block");
        $("#btn-login").css("display", "none");
        $("#loginbodymask").css("display", "none");
    })
    // 个人中心
    $("#mybox").on("mouseenter", function () {
        $("#myform").css("display", "block");
    })
    $("#mybox").on("mouseleave", function () {

        $("#myform").css("display", "none");
    })
    //退出
    $("#quit").on("click", function () {
        $("#mybox").css("display", "none");
        $("#btn-login").css("display", "block");
    })
}

function navtabs() {
    $("#my-tabs").on("click", function () {
        // 上边导航
        $("#my-tabs").css({
            "opacity": "1",
        })
        $("#peiduidui").css({
            "opacity": ".5",
        })
        $("#data").css({
            "opacity": ".5",
        })
        //左边导航
        $("#我的").css("display", "block");
        $("#配对对").css("display", "none");
        $("#资料").css("display", "none");

        //右边内容
        $("#my-content").css("display", "block");
        $("#peiduidui-content").css("display", "none");
        $("#data-content").css("display", "none");
    })
    $("#peiduidui").on("click", function () {
        // 上边导航
        $("#my-tabs").css({
            "opacity": ".5",
        })
        $("#peiduidui").css({
            "opacity": "1",
        })
        $("#data").css({
            "opacity": ".5",
        })
        //左边导航
        $("#我的").css("display", "none");
        $("#配对对").css("display", "block");
        $("#资料").css("display", "none");
        //右边内容
        $("#my-content").css("display", "none");
        $("#peiduidui-content").css("display", "block");
        $("data-content").css("display", "none");

    })
    $("#data").on("click", function () {
        // 上边导航
        $("#my-tabs").css({
            "opacity": ".5",
        })
        $("#peiduidui").css({
            "opacity": ".5",
        })
        $("#data").css({
            "opacity": "1",
        })
        //左边导航
        $("#我的").css("display", "none");
        $("#配对对").css("display", "none");
        $("#资料").css("display", "block");
        //右边内容
        $("#my-content").css("display", "none");
        $("#peiduidui-content").css("display", "none");
        $("#data-content").css("display", "block");
    })
}

function myAdd() {
    //点击按钮
    $("#btn1").on("click", function () {
        $("#btn1").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        $("#btn2").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#btn3").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#ul-mark").animate({
            "margin-top":"15px",
        },400)
    })
    $("#btn2").on("click", function () {
        $("#btn1").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#btn2").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        $("#btn3").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#ul-mark").animate({
            "margin-top":"48px",
        },400)
    })
    $("#btn3").on("click", function () {
        $("#btn1").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#btn2").css({
            "font-size": "1rem",
            opacity: .8
        });
        $("#btn3").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        $("#ul-mark").animate({
            "margin-top":"83px",
        },400)

    })
}
    // 修改

function dataChange()
{
    $("#my-navigate-change").on("click",function(){
        $(".card").addClass("shake shake-constant shake-little");
        $("#my-navigate-cancel").css("display","block");
        $(".myModal-box-change").animate({
            opacity: .5
        },300);
     

    })
    $("#my-navigate-cancel").on("click",function(){
        $("#my-navigate-cancel").css("display","none");
        $(".card").removeClass("shake shake-constant shake-little");
        $(".myModal-box-change").animate({
            opacity: 0
        },300);

    });

}

$(document).ready(function () {

    //窗体大小改变
    sizechange();
    //屏幕变化
    var screenWidth = $(window).width(); //屏幕大小
    var scrollTop = $(document).scrollTop(); //滚动条据顶部高度
    //滚动导航栏变化
    Scroll();
    //登录界面js
    login();
    // 选项卡
    navtabs();
    // 添加内容
    myAdd();
    // 修改
    dataChange();
})