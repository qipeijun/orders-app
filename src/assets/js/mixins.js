// 混合
export default {
  data() {
    return {
      msg: "mixins"
    }
  },
  methods: {
    goto(url){
      this.$router.push({
        path:url
      })
    },
    back(){
      this.$router.back();
    },
    showToast(txt,type=''){
      this.$createToast({
        txt,
        type,
      }).show()
    }
  },
  created() {

  },
  mounted() {
  }
}