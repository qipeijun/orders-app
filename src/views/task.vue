<template>
  <div class="task">
    <m-header title="任务列表"></m-header>
    <div class="task-wrap">
      <div class="task-item">
        <div class="task-key">关键词:</div>
        <div class="task-val">智能、手机、时尚、超薄智能、手机、时尚、超薄智能</div>
      </div>

      <div class="task-item">
        <div class="task-key">订单价格:</div>
        <div class="task-val">￥1200.00</div>
      </div>

      <div class="task-item">
        <div class="task-key">卖家备注:</div>
        <div class="task-val">货比三家</div>
      </div>

      <div class="task-item imgs">
        <div class="task-key">商品图片:</div>
        <div class="task-val">
          <img
            :src="img"
            v-for="(img, index) in imgs"
            :key="img"
            @click="handleImgsClick(index)">
        </div>
      </div>

      <cube-button outline @click="taskDone">完成任务</cube-button>



    </div>
  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import mixins from '../assets/js/mixins'
  export default {
    name: "task",
    components:{mHeader},
    mixins:[mixins],
    data(){
      return {
        initialIndex: 0,
        imgs: [
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
        ]
      }
    },
    methods:{
      handleImgsClick(index) {
        this.initialIndex = index
        const params = {
          $props: {
            imgs: this.imgs,
            initialIndex: 'initialIndex', // 响应式数据的key名
            loop: false
          },
          $events: {
            change: (i) => {
              // 必须更新 initialIndex
              this.initialIndex = i
            }
          }
        }
        this.$createImagePreview({ ...params }).show()
      },
      taskDone(){
        this.goto('/task-done')
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
  .task{
    padding-top: rem(44);
    .task-wrap{
      padding: rem(20);
      .task-item{
        display: flex;
        font-size: rem(16);
        margin-top: rem(10);
        margin-bottom: rem(10);
        .task-key{
          width: rem(80);
          text-align: justify;
          line-height: 1.2;
        }
        .task-val{
          flex: 1;
          text-decoration: underline;
          line-height: 1.2;
          display: flex;
          flex-wrap: wrap;

        }
        &.imgs{
          margin-bottom: rem(20);
          .task-key{
            padding-top: rem(5);
          }
          img{
            display: block;
            width: rem(110);
            height: rem(80);
            margin: rem(5);
            border-radius: rem(4);
          }
        }
      }
    }
  }
</style>