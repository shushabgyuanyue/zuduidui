<template>
 <div class="col-lg-4 my-card" v-for="(item,index) in createdItems">
                                    <div class="card">
                                        <!-- 头部 -->
                                        <div class="card-header" style="padding:3px;z-index:2">
                                            <!-- 订阅 -->
                                            <div class="flex-justfiy">
                                                <button class="btn btn-light " type="submit" style="margin:0;padding:0;">
                                                    <svg class="icon" aria-hidden="true" style="font-size: 1rem;">
                                                        <use xlink:href="#icon-dingyue"></use>
                                                    </svg>
                                                </button>
                                                <!-- 分享 -->
                                                <button class="btn btn-light" type="submit" style="margin:0;padding:0;">
                                                    <svg class="icon" aria-hidden="true" style="font-size: .8rem;">
                                                        <use xlink:href="#icon-fenxiang"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="card-body" style="padding:0;position:relative;">

                                            <!-- 了解模态框 -->
                                            <div class="myModal-box-info">
                                                <div class="my-modal">
                                                    <button type="button" class="btn btn-outline-info " data-dismiss="modal"
                                                        data-toggle="modal" data-target="#join">加入团队</button>
                                                    <button type="button" class="btn btn-outline-info " data-dismiss="modal"
                                                        data-toggle="modal" data-target="#detail">了解详情</button>
                                                </div>
                                            </div>
                                            <!-- 修改模态框 -->
                                                <div class="myModal-box-change">
                                                    <div class="my-modal flex-column">
                                                        <svg class="icon" aria-hidden="true" style="font-size: 3rem;opacity:1">
                                                            <use xlink:href="#icon-shanchu-copy"></use>
                                                        </svg>
                                                        <svg class="icon" aria-hidden="true" style="font-size: 3rem;opacity:1">
                                                            <use xlink:href="#icon-bianji-copy"></use>
                                                        </svg>
                                                    </div>
                                                </div>
                                            <!-- 图片 -->
                                            <img class="card-img" :src="item.cardimg" alt="">
                                        </div>
                                        <!-- 尾部 -->
                                        <div class="card-footer " style="padding:2px 16px;">
                                            <div class="aflexcenter">
                                                <a href="../personal/personal.html" class="aflexcenter" style="width: fit-content">
                                                    <div style="margin-right:5px;">
                                                        <svg class="icon" aria-hidden="true" style="font-size: 1.8rem;">
                                                            <use class="avatar" :xlink:href="item.avater"></use>
                                                        </svg>
                                                    </div>
                                                    <b>
                                                        <h6 class="PromulgatorName" style="color:#2c3338;margin: 0;font-size: .9rem">{{item.userName}}</h6>
                                                    </b>
                                                </a>
                                            </div>
                                            <b class="card-text">{{item.describe}}</b>
                                            <div style="text-align:right"><time style="opacity:.8 ;font-size:.8rem">{{item.time}}</time></div>
                                        </div>
                                    </div>
                                </div>
    
</template>

<script>
export default {
    
}
</script>

<style>


</style>

