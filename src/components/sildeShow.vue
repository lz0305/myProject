<template>
    <div class="banner" @mouseover="clearInv" >
        <div class="slideClass">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul>
            <li @click="goto(nextIndex)">→</li>
            <li>
                <a :class="{checked: index === nowIndex}" v-for="(item, index) in slides" :key="index" @click="goto(index)">
                    {{index+1}}
                </a>
            </li>
            <li @click="goto(prevIndex)">←</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        slides: {
            type: Array
        },
        inv: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return {
            isShow: true,
            nowIndex: 0
        }
    },
    methods: {
        goto ( index ) {
            this.isShow = false;
            setTimeout(()=>{
                this.isShow  = true;
                this.nowIndex = index;
            }, 1000)
        },
        runInv (){//定时函数
            this.invId = setInterval(()=>{
                this.goto( this.nextIndex );
            }, this.inv);
        },
        clearInv (){
            clearInterval(this.invId);
        }
    },
    computed: {
        prevIndex () {
            if( this.nowIndex ===0 ){
                return this.slides.length - 1;
            }else{
                return this.nowIndex - 1;
            }
        },
        nextIndex () {
            if( this.nowIndex === this.slides.length - 1){
                return 0;
            }else{
                return this.nowIndex + 1;
            }
        }
    },
    mounted() {
        //执行定时动画函数
        this.runInv();
    }
}
</script>

<style lang="scss" scoped>
    .slide-trans-enter-active{
        transition: all 1s;
    }
    .slide-trans-enter{
        transform: translateX(822px);
    }
    .slide-trans-old-leave-active{
        transition: all 1s;
        transform: translateX(-822px);
    }
    .slide-trans-enter, .slide-trans-leave-to{
        transform: translateX(0px);
    }
    .banner {
        position: relative;
    }
    .slideClass{
        white-space: nowrap;
        overflow: hidden;
        height:400px;
    }
    .slideClass a{
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .banner ul {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0;
        width: 100%;
    }
    .banner ul li{
        float: right;
        padding: 2px 5px;
        background: rgba($color: #000000, $alpha: .2);
        margin: 0 5px;
        &:hover{
            cursor: pointer;
        }
    }
    .banner h2{
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 20px;
    }
    .banner ul li a{
        display: inline-block;
        padding: 0 5px;
        margin: 0 5px;
        &:hover{
            color: white;
            background: sandybrown;
        }
    }
    .banner ul li a.checked{
        color: red;
        text-decoration: underline;
    }
</style>