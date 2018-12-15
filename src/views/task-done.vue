<template>
  <div class="task-done">
    <m-header title="任务完成"></m-header>
    <div class="task-done-wrap form-wrap">
      <div class="form-item">
        <cube-input v-model="acc" placeholder="请输入订单编号">
          <div class="form-item-pre" slot="prepend">
            <i class="cubeic-mall"></i>
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
    name: "tash-done",
    components: {mHeader},
    mixins: [mixins],
    data() {
      return {
        acc: ""
      }
    },
    methods: {
      submit() {
        this.$createDialog({
          type:"alert",
          title:"提交成功",
          // content:"成功抢一单",
          icon:"cubeic-ok",
          onConfirm:()=>{
            this.goto('/user')
          }
        }).show()
      }
    },
    created() {
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/function";

  .task-done {
    padding-top: rem(44);

    .task-done-wrap {
      padding: rem(20);
    }
  }
</style>