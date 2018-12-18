var TeamLength = 0;
var TaskLength = 0;
var ActivitysLength = 0;
var sumLength = 0;
//自适应
function sizechange() {
    function windowsize() {
        if ($(window).width() > 970) {
            $(".top-navigation").css("background", "transparent"); //导航栏透明
            $(".main-navigation").show();
            $(".head-background-img").show();
            $(".form-inline.describe").show();
            $("#container").addClass("container");
            TeamScroll(); //滚动导航栏变化
        } else {
            $(".top-navigation").css("background", "#343A40");
            $(".main-navigation").hide();
            $(".head-background-img").hide();
            $(".form-inline.describe").hide();
            $("#container").removeClass("container");
        }
    }
    windowsize();
    $(window).resize(function () {
        windowsize();
    })
}
//侧边导航栏变化
function TeamScroll() {
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
        if (scrollBottom < 280) {
            $(".main-navigation").css({
                "position": "absolute",
                "top": $(document).height() - $(window).height() + 150,
            });
        } else {
            $(".main-navigation").css({
                "position": "fixed",
                "top": 410,
            });
        }
        //个人中心消失
        $("#myform").css("display", "none");
    })
}
//card 模态框变化
function CardChange(number, type) {
    //显示模态框
    function action(e) {

        var myModalBox = e.target.children[0];
        var myModal = myModalBox.children[0];
        $(myModal).animate({
            top: 167,
            opacity: 0.5,
        }, 200);
        $(myModal).animate({
            top: 163,
            opacity: 1,
        }, 100);
        $(myModalBox).animate({
            opacity: 0.7,
        }, 300);
    }
    //隐藏模态框
    function actionEnd(e) {

        var myModalBox = e.target.children[0];
        var myModal = myModalBox.children[0];
        // var card = $(myModal).parents(".card");
        $(myModal).stop();
        $(myModalBox).stop();
        $(myModal).animate({
            top: 0,
            opacity: 0,
        }, 200);
        $(myModalBox).animate({
            opacity: 0
        }, 200);
    }
    var typelength;
    var typename;
    switch (type) {
        case 1:
            typelength = TeamLength;
            typename = "#团队";
            break;
        case 2:
            typelength = TaskLength;
            typename = "#任务";
            break;
        case 3:
            typelength = ActivitysLength;
            typename = "#活动";
            break;
    }
    var BodyCard = document.querySelectorAll(typename + " " + ".card-body");
    /**
     * 这里的绑定事件可以优化
     * 
     */
    // console.log(sumLength,sumLength);
    for (var i = typelength - number; i < typelength; i++) {
        // console.log("for"+i);
        BodyCard[i].addEventListener("mouseenter", function (e) {
            // console.log(i);
            action(e);
        }, false);
        BodyCard[i].addEventListener("mouseleave", function (e) {
            actionEnd(e);
        }, false);
    };
}
//添加卡片
function AddCardTemplate(number, type) {

    var cardarray = new Array(); //卡片容器


    for (var i = 0; i < number; i++) {
        var cardTemplate = $(".card-template");
        cardarray[i] = cardTemplate.html();
        switch (type) {

            case 1:
                $("#团队").append(cardarray[i]);
                break;
            case 2:
                $("#任务").append(cardarray[i]);
                break;
            case 3:
                $("#活动").append(cardarray[i]);
                break;
        }
    }
}

function Ajax(URL, type, first) {
    var typename; //父容器id
    var typeLength; //长度
    if (first === true) {
        $.ajax({
            url: URL, //json
            type: "GET", //请求方式为get
            dataType: "json", //返回数据格式为json
            success: function (data, textStatus) { //请求成功完成后要执行的方法
                //添加卡片
                AddCardTemplate(data.team.length, type);
                switch (type) {
                    case 1:
                        TeamLength += data.team.length;
                        typename = "#团队";
                        break;
                    case 2:
                        TaskLength += data.team.length;
                        typename = "#任务";
                        break;
                    case 3:
                        ActivitysLength += data.team.length;
                        typename = "#活动";
                        break;
                }
                sumLength += data.team.length;
                var cardimg = document.querySelectorAll(typename + " " + ".card-img") //内容图片
                var cardDescribe = document.querySelectorAll(typename + " " + ".card-text") //描述
                var cardAvatar = document.querySelectorAll(typename + " " + ".avatar") //头像
                var cardUserName = document.querySelectorAll(typename + " " + ".PromulgatorName") //昵称
                var cardTime = document.querySelectorAll(typename + " " + "time") //时间
                for (var i = 0; i < data.team.length; i++) {
                    $(cardUserName[i]).text(data.team[i].userName);
                    $(cardimg[i]).attr("src", data.team[i].cardimg);
                    $(cardDescribe[i]).text(data.team[i].describe);
                    $(cardAvatar[i]).attr("xlink:href", data.team[i].avatar);
                    $(cardTime[i]).text(data.team[i].time)

                }
                //卡片事件
                CardChange(data.team.length, type);
            },
            error: function (xhr) {
                alert("error");
            }
        })
    } else {
        $.ajax({
            url: URL, //json
            type: "GET", //请求方式为get
            dataType: "json", //返回数据格式为json
            success: function (data, textStatus) {
                switch (type) {
                    case 1:
                        TeamLength += data.team.length;
                        typeLength = TeamLength;
                        typename = "#团队";
                        break;
                    case 2:
                        TaskLength += data.team.length;
                        typeLength = TaskLength;
                        typename = "#任务";
                        break;
                    case 3:
                        ActivitysLength += data.team.length;
                        typeLength = ActivitysLength;
                        typename = "#活动";
                        break;
                }
                sumLength += data.team.length;
                //请求成功完成后要执行的方法 
                if (data.team.length > 0) {
                    //添加卡片
                    AddCardTemplate(data.team.length, type);
                    var cardimg = document.querySelectorAll(typename + " " + ".card-img") //内容图片
                    var cardDescribe = document.querySelectorAll(typename + " " + ".card-text") //描述
                    var cardAvatar = document.querySelectorAll(typename + " " + ".avatar") //头像
                    var cardUserName = document.querySelectorAll(typename + " " + ".PromulgatorName") //昵称
                    var cardTime = document.querySelectorAll(typename + " " + "time") //时间
                    var j = 0;
                    for (var i = typeLength - data.team.length; i < typeLength; i++) {
                        $(cardUserName[i]).text(data.team[j].userName);
                        $(cardimg[i]).attr("src", data.team[j].cardimg);
                        $(cardDescribe[i]).text(data.team[j].describe);
                        $(cardAvatar[i]).attr("xlink:href", data.team[j].avatar);
                        $(cardTime[i]).text(data.team[j].time)
                        j++;
                    }
                } else {
                    $("#teamnone").animate({
                        opacity: 0.6,
                    }, 1000)
                    $("#teamnone").delay(2500).animate({
                        opacity: 0,
                    }, 1500)
                }
                //卡片事件
                CardChange(data.team.length, type);
            },
            error: function (xhr) {
                alert("error");
            }
        })

    }

}

//首次添加数据
function firstAddData() {

    Ajax("../json/indexTeam.json", 1, true);
    Ajax("../json/indexTask.json", 2, true);
    Ajax("../json/indexActivitys.json", 3, true);
}
//点击加载更多
function clickAddData() {
    $(".activitysloading").on("click", function () {
        Ajax("../json/indexActivitysAdd.json", 3, false);
    });
    $(".teamloading").on("click", function () {
        Ajax("../json/indexTeamAdd.json", 1, false);
    });
    $(".taskloading").on("click", function () {
        Ajax("../json/indexTaskAdd.json", 2, false);
    });

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

        $("#myform").delay(1000).css("display", "none");
    })
    //退出
    $("#quit").on("click", function () {
        $("#mybox").css("display", "none");
        $("#btn-login").css("display", "block");
    })
}
//提示框
// function tip() {
//     $('[data-toggle="tooltip"]').tooltip();
// }
$(document).ready(function () {

    //窗体大小改变
    sizechange();
    //屏幕变化
    var screenWidth = $(window).width(); //屏幕大小
    var scrollTop = $(document).scrollTop(); //滚动条据顶部高度
    //添加数据
    firstAddData();
    //滚动导航栏变化
    TeamScroll();
    //点击加载更多数据
    clickAddData();
    //登录界面js
    login();
    //提示框
    // tip();
})