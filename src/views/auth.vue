// 认证
<template>
  <div class="auth">
    <m-header title="实名认证&绑定银行卡"></m-header>
    <div class="form-wrap">

      <div class="form-item">
        <cube-input placeholder="请输入真实姓名">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-person"></i>
          </div>
        </cube-input>
      </div>

      <div class="form-item">
        <cube-input placeholder="请输入身份证号">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-credit-card"></i>
          </div>
        </cube-input>
      </div>

      <div class="form-item">
        <cube-input placeholder="请输入银行卡号">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-credit-card"></i>
          </div>
        </cube-input>
      </div>




      <cube-button outline @click="submit">提交</cube-button>
    </div>
  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import mixins from '../assets/js/mixins'
  export default {
    name: "auth",
    components:{mHeader},
    mixins:[mixins],
    data(){
      return {

      }
    },
    methods:{
      submit(){
        this.$createDialog({
          type: 'alert',
          title: '提交成功',
          content: '认证审核中',
          icon: 'cubeic-alert',
          onConfirm:()=>{
            this.goto('/login')
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
  .auth{
    padding-top: rem(44);
  }
</style>