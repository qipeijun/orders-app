<template>
  <div class="register">
    <m-header title="注册"></m-header>
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
      <cube-button outline @click="register">注册</cube-button>
      <div class="tologin">
        已有账号?<router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import mixins from '../assets/js/mixins'
  import mHeader from '../components/base/m-header'

  export default {
    name: "register",
    components: {mHeader},
    mixins:[mixins],
    data() {
      return {
        acc: "",
        pwd: "",
        eye: {
          open: false,
          reverse: false
        }
      };
    },
    methods:{
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
      register(){
        if (!this.testing()) {
            return ;
        }
        this.$createToast({
          txt:"正在注册",
          $events:{
            timeout:()=>{
              this.goto('/business-license')
            }
          }
        }).show();
      }
    },
    created() {
    },
    mounted(){

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/function";

  .register {
    padding-top: rem(44);

    .form-wrap {
      width: 100%;
      height: auto;
      padding: 20px;
      padding-top: rem(200);
    }
    .tologin{
      text-align: left;
      font-size: rem(16);
      line-height: rem(34);
      margin-top: rem(10);
      a{
        color: #fc9153;
      }
    }
  }
</style>