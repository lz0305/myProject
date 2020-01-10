<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :md="6" class="logo">
              <router-link to="/" tag="p"><img alt="Vue logo" src="../assets/logo.png">噜啦啦的项目</router-link>
          </el-col>
          <el-col :md="5" :push="13">
            <ul class="nav">
              <li><a href="#" @click="aboutShow">关于</a></li>
              <li><a href="#" v-if="userName===''" @click="registerShow">注册</a></li>
              <li><a href="#" v-if="userName===''" @click="loginShow">登录</a></li>
              <li><a href="#" v-if="userName!=''" @click="logOut">退出</a></li>
              <li><a href="#" v-if="userName!=''" class='user'>{{userName}}</a></li>
            </ul>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        &copy; 2019 CopyRight By <a href="http://wpa.qq.com/msgrd?v=3&uin=27644395&site=在线客服" target="_blank" title="发起留言">lulalala</a>
      </el-footer>
    </el-container>
    <!-- 弹窗插件 -->
    <my-dialog :isShow="isAboutShow" @closeDialog="closeDialog('isAboutShow')">
      <p>
        三个熊兄弟按照周围人类的行为准则，竭尽所能成为人类社会的一员。 <br>
        《咱们裸熊》是Cartoon Network於2015年7月推出的电视卡通，改编自Daniel Chong
        创作的网络漫画《The Three Bare Bears》，讲述一只叫Grizzly的热血灰熊、一只叫Panda的死宅熊猫、
        一只叫Ice Bear的博学北极熊，三熊的日常生活故事。
      </p>
    </my-dialog>
    <my-dialog :isShow="isLoginShow" @closeDialog="closeDialog('isLoginShow')">
      <login-form  @loginSuccess="loginSuccess"></login-form>
    </my-dialog>
    <my-dialog :isShow="isRegisterShow" @closeDialog="closeDialog('isRegisterShow')">
      <register-form @closeDialog="closeDialog('isRegisterShow')"></register-form>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from '../components/base/dialog'
import loginForm from '../components/loginForm'
import RegisterForm from '../components/registerForm'
export default {
  components: {
    MyDialog,
    loginForm,
    RegisterForm
  },
  data() {
    return {
      isAboutShow: false,
      isLoginShow: false,
      isRegisterShow: false,
      userName: ''
    }
  },
  methods: {
    aboutShow () {
      this.isAboutShow = true;
    },
    loginShow () {
      this.isLoginShow = true;
    },
    registerShow () {
      this.isRegisterShow = true;
    },
    closeDialog ( e ) {
      this[e] = false;
    },
    loginSuccess (e) {
      this.userName = e;
      this.closeDialog('isLoginShow');
    },
    logOut () {
      this.$message('已退出用户' + this.userName);
      this.userName = '';
    }
  }
}
</script>

<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header{
    background: #000;
    height: auto!important;
  }
  li{
    list-style: none;
  }
  $h50: 50px;
  .logo {
    color: wheat;
  }
  .logo img{
    width: $h50;
    height: $h50;
    vertical-align: middle;
    margin-right: 20px;
  }
  .el-header .nav {
    overflow: hidden;
  }
  .el-header .nav li{
    float: right;
    line-height: 53px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .el-header .nav li a{
    color: #f9fafc;
    text-decoration: none;
    margin: 0;
  }
  .el-header .nav li a:hover{
    color: orangered;
  }
  .app-content{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  body{
    background:#ddd;
  }
  .app-content{
    margin-bottom: 50px;
  }
  /* footer */
  .el-footer{
    background: #c5cad8;
    color: #303133;
    width: 100%;
    text-align: center;
    line-height: 60px;
    position: fixed;
    bottom: 0;
  }
  .user{
    color: #F56C6C;
  }
</style>
