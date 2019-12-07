var jq = jQuery.noConflict(); //jQuery 定义
var TeamLength = 0;
var TaskLength = 0;
var ActivitysLength = 0;
var sumLength = 0;
//自适应
function sizechange() {
    function windowsize() {
        if (jq(window).width() > 970) {
            jq(".top-navigation").css("background", "transparent"); //导航栏透明
            Scroll(); //滚动导航栏变化
        } else {
            jq(".top-navigation").css("background", "#343A40");
        }
    }
    windowsize();
    jq(window).resize(function () {
        windowsize();
    })
}
//滑动变化
function Scroll() {
    jq(document).scroll(function () {

        var scrollTop = jq(document).scrollTop();
        var screenWidth = jq(window).width();
        var scrollBottom = jq(document).height() - jq(window).height() - jq(document).scrollTop();
        if (scrollTop < 50 && screenWidth > 767) {
            //顶部导航
            jq(".top-navigation").css("background", "transparent");
            //各种中心导航
            jq("#myform").css("background", "transparent");
        } else {
            //顶部导航
            jq(".top-navigation").css("background", "#343A40");
            //各种中心导航
            jq("#myform").css("background", "#343A40");
        }
        //个人中心消失
        jq("#myform").css("display", "none");
    })
}
// 登录界面 加入团队 个人中心
function login() {
    //点击登录
    jq(".login").on("click", function () {
        jq("#loginbodymask").css("display", "block");
    });
    //登录模态框关闭
    jq("#loginclose").on("click", function () {
        jq(".bodymask").css("display", "none");
    });
    //微信
    jq("#weixin").on("mouseenter", function () {
        jq("#weixinicon").attr("xlink:href", "#icon-weixin1");
    });
    jq("#weixin").on("mouseleave", function () {
        jq("#weixinicon").attr("xlink:href", "#icon-weixin");
    });
    //qq
    jq("#qq").on("mouseenter", function () {
        jq("#qqicon").attr("xlink:href", "#icon-QQ");
    });
    jq("#qq").on("mouseleave", function () {
        jq("#qqicon").attr("xlink:href", "#icon-changyonglogo41");
    });
    //加入团队
    jq("#myjoinbtn").on("click", function () {

        jq("#myjoinmask").css("display", "block");
        jq("#myjoinbtn").addClass('disabled');
        jq("#myjoinbtn").prop('disabled', true);
    });
    jq("#myjoin-close").on("click", function () {
        jq("#myjoinmask").css("display", "none");
    });
    //登录
    jq("#login-success").on("click", function () {
        jq("#mybox").css("display", "block");
        jq("#btn-login").css("display", "none");
        jq("#loginbodymask").css("display", "none");
    })
    // 个人中心
    jq("#mybox").on("mouseenter", function () {
        jq("#myform").css("display", "block");
    })
    jq("#mybox").on("mouseleave", function () {

        jq("#myform").css("display", "none");
    })
    //退出
    jq("#quit").on("click", function () {
        jq("#mybox").css("display", "none");
        jq("#btn-login").css("display", "block");
    })
}
// 导航绑定
function navtabs() {
    jq("#my-tabs").on("click", function () {
        // 上边导航
        jq("#my-tabs").css({
            "opacity": "1",
        })
        jq("#peiduidui").css({
            "opacity": ".5",
        })
        jq("#data").css({
            "opacity": ".5",
        })
        //左边导航
        jq("#我的").css("display", "block");
        jq("#配对对").css("display", "none");
        jq("#资料").css("display", "none");

        //右边内容
        jq("#my-content").css("display", "block");
        jq("#peiduidui-content").css("display", "none");
        jq("#data-content").css("display", "none");
    })
    jq("#peiduidui").on("click", function () {
        // 上边导航
        jq("#my-tabs").css({
            "opacity": ".5",
        })
        jq("#peiduidui").css({
            "opacity": "1",
        })
        jq("#data").css({
            "opacity": ".5",
        })
        //左边导航
        jq("#我的").css("display", "none");
        jq("#配对对").css("display", "block");
        jq("#资料").css("display", "none");
        //右边内容
        jq("#my-content").css("display", "none");
        jq("#peiduidui-content").css("display", "block");
        jq("data-content").css("display", "none");

    })
    jq("#data").on("click", function () {
        // 上边导航
        jq("#my-tabs").css({
            "opacity": ".5",
        })
        jq("#peiduidui").css({
            "opacity": ".5",
        })
        jq("#data").css({
            "opacity": "1",
        })
        //左边导航
        jq("#我的").css("display", "none");
        jq("#配对对").css("display", "none");
        jq("#资料").css("display", "block");
        //右边内容
        jq("#my-content").css("display", "none");
        jq("#peiduidui-content").css("display", "none");
        jq("#data-content").css("display", "block");
    })
}

function myAdd() {
    //点击按钮
    jq("#btn1").on("click", function () {
        jq("#btn1").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        jq("#btn2").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#btn3").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#ul-mark").animate({
            "margin-top": "15px",
        }, 400)
    })
    jq("#btn2").on("click", function () {
        jq("#btn1").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#btn2").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        jq("#btn3").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#ul-mark").animate({
            "margin-top": "48px",
        }, 400)
    })
    jq("#btn3").on("click", function () {
        jq("#btn1").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#btn2").css({
            "font-size": "1rem",
            opacity: .8
        });
        jq("#btn3").css({
            "font-size": "1.1rem",
            opacity: 1
        });
        jq("#ul-mark").animate({
            "margin-top": "83px",
        }, 400)

    })
}

function myvue() {
    var myContent = new Vue({
        el: "#my-content",
        data: {
            createdItems: [],
            partakeItems: [],
            collectionItems: [],
        },
        methods: {
            cradchange: function (event) {
                console.log(event.target);
                jq(".card").addClass("shake shake-constant shake-little");
                jq("#my-navigate-cancel").css("display", "block");
                jq(".myModal-box-change").animate({
                    opacity: .5
                }, 300);
            },
            removecradchange: function (event) {
                jq("#my-navigate-cancel").css("display", "none");
                jq(".card").removeClass("shake shake-constant shake-little");
                jq(".myModal-box-change").animate({
                    opacity: 0
                }, 300);
            }

        },
        created: function () {
            //为了在内部函数能使用外部函数的this对象，要给它赋值了一个名叫self的变量。
            var self = this;
            jq.ajax({
                url: '../json/indexTask.json',
                type: 'get',
                data: {},
                dataType: 'json'
            }).then(function (res) {
                //把从json获取的数据赋值给数组
                console.log(res);
                self.createdItems = res.team;
            }).fail(function () {
                console.log('失败');
            })
        }
    })
}
jq(document).ready(function () {

    //窗体大小改变
    sizechange();
    //屏幕变化
    var screenWidth = jq(window).width(); //屏幕大小
    var scrollTop = jq(document).scrollTop(); //滚动条据顶部高度
    //滚动导航栏变化
    Scroll();
    //登录界面js
    login();
    // 选项卡
    navtabs();
    // 添加内容
    myAdd();
    //vue
    myvue();

})