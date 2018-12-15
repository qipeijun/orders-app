<template>
  <div class="reset-pwd">
    <m-header title="忘记密码"></m-header>
    <div class="form-wrap">
      <div class="form-item">
        <cube-input v-model="acc" placeholder="请输入账号">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-mobile-phone"></i>
          </div>
        </cube-input>
      </div>

      <!--<div class="form-item">-->
        <!--<cube-input type="password" :eye="eye" v-model="pwd" placeholder="请输入密码">-->
          <!--<div class="form-item-pre" slot="prepend">-->
            <!--<i class="cubeic-lock"></i>-->
          <!--</div>-->
        <!--</cube-input>-->
      <!--</div>-->

      <div class="form-item">
        <cube-input type="password" :eye="eye" v-model="pwd_new_1" placeholder="请输入密码">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-lock"></i>
          </div>
        </cube-input>
      </div>

      <div class="form-item">
        <cube-input type="password" :eye="eye" v-model="pwd_new_2" placeholder="请重复输入密码">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-lock"></i>
          </div>
        </cube-input>
      </div>

      <cube-button outline @click="resetPwd">修改密码</cube-button>

    </div>
  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import mixins from '../assets/js/mixins'
  export default {
    name: "reset-pwd",
    components:{mHeader},
    mixins:[mixins],
    data(){
      return {
        acc: "",
        pwd: "",
        pwd_new_1:"",
        pwd_new_2:"",
        eye: {
          open: false,
          reverse: false
        }
      }
    },
    methods:{
      testing(){
        if (!this.acc) {
          this.showToast('账户不能为空');
            return false
        }
        if (!this.pwd_new_1) {
          this.showToast('密码不能为空');
            return false
        }
        if (this.pwd_new_1 !== this.pwd_new_2) {
          this.showToast('密码不一致');
            return false
        }
        return true
      },
      resetPwd(){
        if (!this.testing()) {
            return
        }
        this.$createToast({
          txt:"修改成功,跳转登录页...",
          $events:{
            timeout:()=>{
              this.goto('/login')
            }
          }
        }).show()
      }
    },
    created(){

    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/function";
  .reset-pwd{
    padding-top: rem(44);
    .form-wrap{
      padding: rem(20);
    }
  }

</style>