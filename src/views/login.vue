<template>
  <div class="login">
    <div class="logo">
      <i class="cubeic-person"></i>
    </div>
    <div class="form-wrap">
      <div class="form-item">
        <cube-input v-model="acc" placeholder="请输入账号">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-mobile-phone"></i>
          </div>
        </cube-input>
      </div>
      <div class="form-item">
        <cube-input type="password" :eye="eye" v-model="pwd" placeholder="请输入密码">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-lock"></i>
          </div>
        </cube-input>
      </div>
      <cube-button outline @click="login">登录</cube-button>
      <div class="reg-and-resetpwd">
        <div class="reg-item">
          没有账号?<router-link to="/register">注册</router-link>
        </div>
        <div class="pwd-item">
          <router-link to="/reset-pwd">忘记密码</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import mixins from '../assets/js/mixins'

  export default {
    name: "login",
    mixins: [mixins],
    data() {
      return {
        msg: "login",
        acc: "",
        pwd: "",
        eye: {
          open: false,
          reverse: false
        }
      }
    },
    methods: {
      testing() {
        if (!this.acc) {
          this.$createToast({
            txt: '账户不能为空',
            type: 'txt'
          }).show();
          return false;
        }
        if (!this.pwd) {
          this.$createToast({
            txt: '密码不能为空',
            type: 'txt'
          }).show();
          return false
        }
        return true
      },
      login() {
        if (!this.testing()) {
          return false;
        }
        this.$createToast({
          txt: "登录中...",
          $events: {
            timeout: () => {
              sessionStorage.ifLogin = 'login';
              this.goto('/')
            }
          }
        }).show();

      }
    },
    created() {
      console.log(this.msg);
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/function";

  .login {
    padding-top: rem(80);
    .logo {
      width: rem(150);
      height: rem(150);
      border-radius: 50%;
      border: 1px solid #fc9153;
      margin: 0 auto rem(30);
      box-shadow: 0 0 10px #fc9153 inset, 0 0 10px #fc9153;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: rem(100);
        color: #fc9153;
      }
    }


    .reg-and-resetpwd {
      display: flex;
      justify-content: space-between;
      font-size: rem(16);
      line-height: rem(32);
      margin-top: rem(10);

      a {
        color: #fc9153;
      }
    }
  }

</style>