<template>
  <div class="orders">
    <m-header :title="title" :show-back="false"></m-header>
    <div class="i-orders">
      <div class="i-orders-item" @click="getOrders">接单</div>
    </div>
  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import {mapMutations} from 'vuex'
  import {NAV_CHANGE} from '../assets/js/types'
  import mixins from '../assets/js/mixins'
  export default {
    name: "orders",
    components:{mHeader},
    mixins:[mixins],
    data(){
      return {
        title:"任务大厅"
      }
    },
    methods:{
      getOrders(){
        this.showToast('派发订单中...','loading')
        setTimeout(()=>{
          this.$createDialog({
            type:"alert",
            title:"哇~",
            content:"成功抢一单",
            icon:"cubeic-ok",
            onConfirm:()=>{
              this.goto('/bind-tb')
            }
          }).show()
        },3000)
      },
      ...mapMutations([NAV_CHANGE])
    },
    created(){
      this.NAV_CHANGE(this.title)
    },
    mounted() {

    },
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/function";
  .orders{
    padding-top: rem(44);
    .i-orders{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .i-orders-item{
        width: rem(120);
        height: rem(120);
        border-radius: 50%;
        border: 1px solid #fc9153;
        margin: 0 auto rem(30);
        box-shadow: 0 0 10px #fc9153 inset, 0 0 10px #fc9153;
        line-height: rem(120);
        text-align: center;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #fc9153;
      }
    }
  }

</style>