<template>
    <div>
        <el-row :gutter="24">
            <el-col :span="6">
                <div class="grid-content" style="background: white;">
                    <el-row>
                        <el-col :span="8" :offset='8' class="productImg">
                            <img :src="productIcon">
                        </el-col>
                        <el-col :span="24" tag="ul" class="productList">
                            <router-link 
                                :to="{ path: item.path }" v-for="(item, index) in newProject" 
                                :key="index" 
                                tag="li"
                                active-class="checked">
                                {{item.title}}
                            </router-link>
                        </el-col>
                    </el-row>
                </div>
                </el-col>
            <el-col :span="18">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive> 
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newProject: [
                {
                    title: '熊家族',
                    path: 'family',
                    active: false
                },
                {
                    title: '白熊',
                    path: 'iceBear',
                    active: false
                },
                {
                    title: '灰熊',
                    path: 'grizzlies',
                    active: false
                },
                {
                    title: '胖达',
                    path: 'panda',
                    active: false
                }
            ],
            imgMap: {
                '/detail/family': require("../assets/product/0.jpg"),
                '/detail/iceBear': require("../assets/product/1.jpg"),
                '/detail/grizzlies': require("../assets/product/2.jpg"),
                '/detail/panda': require("../assets/product/3.jpg")
            }
        }
    },
    computed: {
        productIcon () {
            return this.imgMap[this.$route.path]
        }
    },
}
</script>

<style scoped>
    .productImg img{
        width: 100%;
        margin: 10px 0;
    }
    .productList{
        padding-left: 0;
    }
    .productList li{
        line-height: 40px;
        padding-left: 40px;
    }
    .productList li:hover,li.checked{
        color: white;
        cursor: pointer;
        background: #32cd94;
    }
</style>