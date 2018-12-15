<template>
  <div class="home">
    <!--<m-header :show-back="true" title="任务大厅"></m-header>-->
    <!--<cube-button @click="goto('/login')">登录</cube-button>-->
    <router-view></router-view>
    <div class="tab-bar">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        show-slider
        :data="tabs"
        @click="clickHandler">
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import mixins from '../assets/js/mixins'
import {mapState,mapMutations} from 'vuex'
import mHeader from '../components/base/m-header'
import {NAV} from '../assets/js/types'

export default {
  name: 'home',
  mixins:[mixins],
  components:{mHeader},
  data() {
    return {
      msg:"home",
      selectedLabelDefault: '',
      tabs: [{
        label: '任务大厅',
        icon: 'cubeic-home'
      },
        {
        label: '我的',
        icon: 'cubeic-person'
      }],
    };
  },
  computed:{
    ...mapState([NAV])
  },
  methods:{
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      switch (label) {
        case '任务大厅':
          this.goto('/orders');
          break;
        case '我的':
          this.goto('/user');
          break;
        default:
          return false;
      }
    },
  },
  created() {
    console.log(this.msg);
  },
  mounted() {
    this.selectedLabelDefault = this.NAV;
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/function";
  .home{
    /*padding-top: rem(44);*/
    padding-bottom: rem(51);
    .tab-bar{
      width: 100%;
      height: rem(52);
      position: fixed;
      left: 0;
      bottom: 0;
      border-top: rem(0.5) solid #edf0f4;
      background: #fefefe;
      /deep/ .cube-tab-bar{
        .cube-tab{
          i{
            font-size: rem(18);
          }
          div{
            font-size: rem(14);
          }
        }
      }
    }
  }
</style>
