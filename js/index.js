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
            jq(".main-navigation").show();
            jq(".head-background-img").show();
            jq(".form-inline.describe").show();
            jq("#container").addClass("container");
            TeamScroll(); //滚动导航栏变化
        } else {
            jq(".top-navigation").css("background", "#343A40");
            jq(".main-navigation").hide();
            jq(".head-background-img").hide();
            jq(".form-inline.describe").hide();
            jq("#container").removeClass("container");
        }
    }
    windowsize();
    jq(window).resize(function () {
        windowsize();
    })
}
//侧边导航栏变化
function TeamScroll() {
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
        if (scrollBottom < 280) {
            jq(".main-navigation").css({
                "position": "absolute",
                "top": jq(document).height() - jq(window).height() + 150,
            });
        } else {
            jq(".main-navigation").css({
                "position": "fixed",
                "top": 410,
            });
        }
        //个人中心消失
        jq("#myform").css("display", "none");
    })
}
//card 模态框变化
function CardChange(number, type) {
    //显示模态框
    function action(e) {

        var myModalBox = e.target.children[0];
        var myModal = myModalBox.children[0];
        jq(myModal).animate({
            top: 167,
            opacity: 0.5,
        }, 200);
        jq(myModal).animate({
            top: 163,
            opacity: 1,
        }, 100);
        jq(myModalBox).animate({ 
            opacity: 0.7,
        }, 300);
    }
    //隐藏模态框
    function actionEnd(e) {

        var myModalBox = e.target.children[0];
        var myModal = myModalBox.children[0];
        // var card = jq(myModal).parents(".card");
        jq(myModal).stop();
        jq(myModalBox).stop();
        jq(myModal).animate({
            top: 0,
            opacity: 0,
        }, 200);
        jq(myModalBox).animate({
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
        var cardTemplate = jq(".card-template");
        cardarray[i] = cardTemplate.html();
        switch (type) {

            case 1:
                jq("#团队").append(cardarray[i]);
                break;
            case 2:
                jq("#任务").append(cardarray[i]);
                break;
            case 3:
                jq("#活动").append(cardarray[i]);
                break;
        }
    }
}

function Ajax(URL, type, first) {
    var typename; //父容器id
    var typeLength; //长度
    if (first === true) {
        jq.ajax({
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
                    jq(cardUserName[i]).text(data.team[i].userName);
                    jq(cardimg[i]).attr("src", data.team[i].cardimg);
                    jq(cardDescribe[i]).text(data.team[i].describe);
                    jq(cardAvatar[i]).attr("xlink:href", data.team[i].avatar);
                    jq(cardTime[i]).text(data.team[i].time)

                }
                //卡片事件
                CardChange(data.team.length, type);
            },
            error: function (xhr) {
                alert("error");
            }
        })
    } else {
        jq.ajax({
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
                        jq(cardUserName[i]).text(data.team[j].userName);
                        jq(cardimg[i]).attr("src", data.team[j].cardimg);
                        jq(cardDescribe[i]).text(data.team[j].describe);
                        jq(cardAvatar[i]).attr("xlink:href", data.team[j].avatar);
                        jq(cardTime[i]).text(data.team[j].time)
                        j++;
                    }
                } else {
                    jq("#teamnone").animate({
                        opacity: 0.6,
                    }, 1000)
                    jq("#teamnone").delay(2500).animate({
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
    jq(".activitysloading").on("click", function () {
        Ajax("../json/indexActivitysAdd.json", 3, false);
    });
    jq(".teamloading").on("click", function () {
        Ajax("../json/indexTeamAdd.json", 1, false);
    });
    jq(".taskloading").on("click", function () {
        Ajax("../json/indexTaskAdd.json", 2, false);
    });

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

        jq("#myform").delay(1000).css("display", "none");
    })
    //退出
    jq("#quit").on("click", function () {
        jq("#mybox").css("display", "none");
        jq("#btn-login").css("display", "block");
    })
}
//提示框
// function tip() {
//     jq('[data-toggle="tooltip"]').tooltip();
// }
jq(document).ready(function () {

    //窗体大小改变
    sizechange();
    //屏幕变化
    var screenWidth = jq(window).width(); //屏幕大小
    var scrollTop = jq(document).scrollTop(); //滚动条据顶部高度
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