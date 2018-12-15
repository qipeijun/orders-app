<template>
  <div class="user">
    <m-header :title="title" :show-back="false"></m-header>
    <div class="avatar">
      <div class="logo">
        <i class="cubeic-person"></i>
      </div>
    </div>

    <div class="user-list">

      <div class="user-item">
        <span>我的任务</span>
        <i class="cubeic-arrow"></i>
      </div>

      <div class="user-item">
        <span>我的提现</span>
        <i class="cubeic-arrow"></i>
      </div>



    </div>


    <div class="user-wrap">

      <cube-button @click="loginOut">退出登录</cube-button>
    </div>

  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import {mapMutations} from 'vuex'
  import {NAV_CHANGE} from '../assets/js/types'
  export default {
    name: "user",
    components:{mHeader},
    data() {
      return {
        title:"我的"
      }
    },
    methods:{
      loginOut(){
        this.$router.push({
          path:"/login"
        })
      },
      ...mapMutations([NAV_CHANGE])
    },
    created() {
      this.NAV_CHANGE(this.title)
    },
    mounted(){

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/function";
  .user{
    padding-top: rem(44);
    .avatar{
      padding-top: rem(20);
    }
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
    .user-list{
      width: 100%;
      height: auto;
      .user-item{
        width: 100%;
        height: rem(50);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 rem(20);
        font-size: rem(16);
        border-bottom: rem(0.5) solid #ccc;
        &:first-child{
          border-top: rem(0.5) solid #ccc;
        }
      }
    }
    .user-wrap{
      padding: rem(20);
    }
  }

</style>