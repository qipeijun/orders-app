<template>
  <div class="header">
    <div class="back"><i @click="back" v-if="showBack" class="cubeic-back"></i></div>
    <div class="title">{{title}}</div>
    <div class="more">&nbsp;</div>
  </div>
</template>

<script>
  import mixins from '../../assets/js/mixins'

  export default {
    props: {
      title: {
        default: 'title'
      },
      showBack: {
        type: Boolean,
        default: true
      }
    },
    mixins: [mixins],
    data() {
      return {}
    },
    methods: {},
    created() {

    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/function";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: rem(44);
    background: #edf0f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 rem(10);

    .back {
      padding: rem(5);

      i {
        font-size: rem(18);
        color: #fc9153;
      }
    }
    .back,.more{
      width: rem(30);
    }

    .title {
      color: #000;
      width: 75%;
      height: rem(44);
      line-height: rem(44);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    }
  }

</style>