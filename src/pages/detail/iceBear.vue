<template>
    <div class="grid-content">
        <el-row class=" rightContent">
            <el-col :span="22" :offset="1">
                <h3>{{form.name}}</h3>
            </el-col>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple duanluo">
                    《We Bare Bears》（咱们裸熊/熊熊三贱客/咱好熊弟/熊熊遇见你）是Cartoon Network于2015年7月推
                    出的电视卡通，改编自Daniel Chong创作的网络漫画《The Three Bare Bears》。
                        卡通讲述一只叫Grizzly的热血棕熊、一只叫Panda的死宅熊猫、一只叫Ice Bear的高冷北极熊，
                        这三只熊的日常生活故事。
                </div>
            </el-col>
            <el-col :span="11" :offset="1" class="mt20">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="购买数量" >
                        <el-select v-model="form.num" placeholder="购买数量" style="width:35%" >
                            <el-option label="1" value="1"></el-option>
                            <el-option label="2" value="2"></el-option>
                            <el-option label="3" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="产品类型" >
                        <el-select v-model="form.price" placeholder="请选择产品类型" style="width:50%" >
                            <el-option label="初级" value="188"></el-option>
                            <el-option label="中级" value="288"></el-option>
                            <el-option label="高级" value="388"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="有效时间">
                        半年
                    </el-form-item>
                    <el-form-item label="总价">
                        {{form.num * form.price}}
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">立即购买</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            
        </el-row>
        <el-row class=" rightContent">
            <el-col :span="22" :offset="1">
                <h3>{{form.name}}</h3>
            </el-col>
            <el-col :span="22" :offset="1">
                <div class="grid-content duanluo">
                    《We Bare Bears》（咱们裸熊/熊熊三贱客/咱好熊弟/熊熊遇见你）是Cartoon Network于2015年7月推
                    出的电视卡通，改编自Daniel Chong创作的网络漫画《The Three Bare Bears》。
                        卡通讲述一只叫Grizzly的热血棕熊、一只叫Panda的死宅熊猫、一只叫Ice Bear的高冷北极熊，
                        这三只熊的日常生活故事。
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '熊家族',
                num: 1,
                price: '288'
            }
        }
    }
}
</script>

<style scoped>
    .rightContent{
        padding-bottom: 20px;
        background: white;
    }
    .duanluo{
        text-indent: 2em;
        padding: 5px 10px;
    }
    .mt20{
        margin-top: 20px;
    }
</style>