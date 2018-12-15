<!--上传营业执照-->
<template>
  <div class="business-license">
    <m-header title="认证"></m-header>

    <div class="wrap">
      <cube-upload
        ref="upload"
        v-model="files"
        :action="action"
        @files-added="addedHandler"
        @file-success="successFile"
        @file-error="errHandler">
        <div class="clear-fix">
          <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
          <cube-upload-btn :multiple="false">
            <div>
              <i>＋</i>
              <p>点击上传营业执照</p>
              <p class="info">(请使用手机横屏拍照)</p>
            </div>
          </cube-upload-btn>
        </div>
      </cube-upload>

      <div class="personal-wrap">
        或
        <router-link to="/auth">个人实名认证</router-link>
      </div>

      <cube-button v-if="fileUpStatus" outline @click="authNext">下一步</cube-button>

    </div>

  </div>
</template>

<script>
  import mHeader from '../components/base/m-header'
  import mixins from '../assets/js/mixins'

  export default {
    name: "business-license",
    components: {mHeader},
    mixins: [mixins],
    data() {
      return {
        action: '//jsonplaceholder.typicode.com/photos/',
        files: [],
        fileUpStatus: false,  // 是否上传成功
      }
    },
    methods: {
      addedHandler() {
        const file = this.files[0];
        file && this.$refs.upload.removeFile(file)
      },
      errHandler(file) {
        // const msg = file.response.message
        this.$createToast({
          type: 'warn',
          txt: 'Upload fail',
          time: 1000
        }).show()
      },
      //文件上传成功
      successFile(file) {
        this.fileUpStatus = true
      },
      authNext() {
        this.goto('/auth')
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

  .business-license {
    padding-top: rem(44);

    .wrap {
      padding: rem(20);

      .personal-wrap {
        width: 100%;
        line-height: rem(34);
        margin-top: rem(10);
        font-size: rem(16);

        a {
          color: #fc9153;
        }
      }
    }
  }

  /deep/ .cube-upload {
    background: #fff;
    position: relative;

    .cube-upload-file, .cube-upload-btn {
      margin: 0;
      height: rem(200);
    }

    .cube-upload-file {
      margin: 0;

      + .cube-upload-btn {
        margin-top: rem(-200);
        opacity: 0;
      }
    }

    .cube-upload-file-def {
      width: 100%;
      height: 100%;

      .cubeic-wrong {
        display: none;
      }
    }

    .cube-upload-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      > div {
        text-align: center;
      }

      i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: rem(50);
        height: rem(50);
        margin-bottom: rem(20);
        font-size: rem(32);
        line-height: 1;
        font-style: normal;
        color: #fff;
        background-color: #333;
        border-radius: 50%;
      }
    }

    .info {
      font-size: rem(14);
    }
  }
</style>