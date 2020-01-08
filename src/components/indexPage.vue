<template>
    <div>
        <el-row>
            <el-col :span="6" class="leftNav">
                <div class="product newProduct">
                    <h3 class="bigTitle">全部产品</h3>
                    <template v-for="(product, index) in productList">
                        <h4 class="smallTitle" :key="index">{{product.title}}</h4>
                        <ul :key="index+1">
                            <li v-for="(item, i) in product.list" :key="i">
                                <a :href="item.url">{{item.title}}</a>
                                <span class="hot" v-if="item.hot">hot</span>
                            </li>
                        </ul>
                        <hr :key="index+2" v-if="!product.last">
                    </template>
                </div> 
                <div class="product hotProduct">
                    <h3 class="bigTitle">最新产品</h3>
                    <ul>
                        <li v-for="(item, index) in newProject" :key="index">
                            <a :href="item.url">{{item.title}}</a>
                                <span class="hot" v-if="item.hot">hot</span>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :md="17" :push="1">
                <div class="right">
                    <slideShow :slides="slides" @onchange="doSomeThingOnSlidesChange"></slideShow>
                    <el-row :md="24" class="productList">
                        <el-col :md="11" 
                        :class="[index%2 != 0?'el-col-offset-2':'']" 
                        v-for="(item, index) in jieshaoList" 
                        :key="index">
                            <dl class="product">
                                <dt><img :src="item.img"></dt>
                                <dd class="title">{{item.title}}</dd>
                                <dd class="jieshao">{{item.jieshao}}</dd>
                                <dd class="btn" :data-id="item.id">立即购买</dd>
                            </dl>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import slideShow from './sildeShow'
export default {
    created() {
        
    },
    components: {
        slideShow
    },
    methods: {
        doSomeThingOnSlidesChange ( index ) {
            console.log("run slides--------" + index)     
        }   
    },
    data() {
        return {
            productList: {
                pc: {
                    title: "pc产品",
                    list: [
                        {
                            title: '数据统计',
                            url: 'a'
                        },
                        {
                            title: '数据预测',
                            url: 'a',
                            hot: true
                        },
                        {
                            title: '流量分析',
                            url: 'a'
                        },
                        {
                            title: '广告发布',
                            url: 'a'
                        }
                    ]
                },
                app:{
                    title: "app产品",
                    last: true,
                    list: [
                        {
                            title: '91助手',
                            url: 'a'
                        },
                        {
                            title: '产品助手',
                            url: 'a',
                            hot: false
                        },
                        {
                            title: '智能地图',
                            url: 'a'
                        },
                        {
                            title: '团队语音',
                            url: 'a',
                            hot: true
                        }
                    ]
                }
            },
            newProject: [
                {
                    title: '数据统计',
                    url: 'a'
                },
                {
                    title: '数据预测',
                    url: 'a'
                },
                {
                    title: '流量分析',
                    url: 'a',
                    hot: true
                },
                {
                    title: '广告分析',
                    url: 'a'
                }
            ],
            jieshaoList: [
                {
                    id: "1231",
                    title: "开放产品",
                    img: require("../assets/product/0.jpg"),
                    jieshao: "开放产品是一种开放产品"
                },
                {
                    id: "20",
                    title: "品牌营销",
                    img: require("../assets/product/1.jpg"),
                    jieshao: "品牌营销品牌营销品牌营销"
                },
                {
                    id: "14",
                    title: "使命必达",
                    img: require("../assets/product/2.jpg"),
                    jieshao: "使命必达使命必达使命必达"
                },
                {
                    id: "3458",
                    title: "勇攀高峰",
                    img: require("../assets/product/3.jpg"),
                    jieshao: "勇攀高峰勇攀高峰勇攀高峰"
                }
            ],
            slides: [
                {
                    title: "Bear family",
                    src: require("../assets/banner/0.jpg"),
                    href: "./image0"
                },
                {
                    title: "Ice bear",
                    src: require("../assets/banner/1.jpg"),
                    href: "./image1"
                },
                {
                    title: "Grizzly",
                    src: require("../assets/banner/2.jpg"),
                    href: "./image2"
                },
                {
                    title: "Panda",
                    src: require("../assets/banner/3.jpg"),
                    href: "./image3"
                },
            ]
        }
    },
}
</script>

<style scoped lang="scss">
$white: #fff;
$left: left;
    .leftNav{
        background: $white;
        padding-bottom: 88px;
    }
    .bigTitle{
        background: #67C23A;
        padding: 10px 5px;
        color: $white;
        margin: 0px 0px 10px;
    }
    .smallTitle{
        padding-left: 10px;
        margin: 0px 0px 10px;
    }
    .product ul{
        padding-left: 25px;
        margin-top: 0;
    }
    .product ul li{
        line-height: 25px;
    }
    .product ul li a{
        text-decoration: none;
        color: #333;
    }
    .product ul li a:hover{
        color: green;
    }
    .product ul li .hot{
        color: $white;
        background: red;
        padding: 0 5px;
        border-radius: 5px;
    }
    .product{
        padding: 10px;
        overflow: hidden;
        background: $white;
    }
    .product dt img{
        width: 80px;
        height: 80px;
    }
    .product dt,
    .product dd
    {
        float: $left;
    }
    .product dd{
        width: 60%;
    }
    .product dd.title{
        font-style: 20px;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .product dd.jieshao{
        color: #333;
        font-size: 14px;
    }
    .product dd.btn{
        margin-top: 5px;
        padding: 5px 10px;
        width: 80px;
        background: #67C23A;
        text-align: center;
        color: $white;
    }
</style>