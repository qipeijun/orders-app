<template>
  <div class="bind-tb">
    <m-header title="绑定账号"></m-header>
    <div class="form-wrap">
      <div class="form-item">
        <cube-input v-model="acc" placeholder="请输入旺旺ID账户名">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-mall"></i>
          </div>
        </cube-input>
      </div>
      <cube-button outline @click="bindTb">绑定</cube-button>
    </div>
  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import mixins from '../assets/js/mixins'
  export default {
    name: "bind-tb",
    components:{mHeader},
    mixins:[mixins],
    data() {
      return {
        acc:""
      };
    },
    methods:{
      bindTb(){
        this.$createDialog({
          type:"alert",
          title:"绑定成功",
          // content:"成功抢一单",
          icon:"cubeic-ok",
          onConfirm:()=>{
            this.goto('/task')
          }
        }).show()
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
  .bind-tb{
    padding-top: rem(44);
  }
</style>