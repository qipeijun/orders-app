<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import mixins from './assets/js/mixins'
  export default {
    mixins:[mixins],
    data(){
      return {
        
      }
    },
    methods:{},
    created(){
      
    },
    mounted() {
    },
    watch:{
      $route(){
        let ifLogin = sessionStorage.ifLogin || '';
        if (!ifLogin) {
            // this.goto('/login')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/function";
  *{
    box-sizing: border-box;
    font-size: rem(14);
  }
  html,body{
    background: #efeff4;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    background: #efeff4;
    min-height: 100vh;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .title{
    font-size: rem(18);
  }


  /* 表单 */
  .form-wrap {
    width: 100%;
    height: auto;
    padding: 20px;

    .form-item {
      margin-bottom: rem(10);

      .form-item-pre {
        padding-left: rem(10);

        i {
          font-size: rem(18);
        }
      }
    }
  }

</style>
