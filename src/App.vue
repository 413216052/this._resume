<template>
  <div id="app">
    <header :class="{header_3d: showHeader3D, header_shrink: showHeaderShrink}">
      <div>
        <div class="header__basis">
          <!--基础信息-->
          <h2 class="router-link" @click="linkTo('personal')">
            <span>赵明皓</span><span>Web前端开发，数据可视化</span>
            <img src="./assets/cc-pointer-left.svg">
          </h2>
          <div class="header__introduction">
            <p>
              <colorful-label :textArr="skillsArr"></colorful-label>
            </p>
          </div>
        </div>
        <div class="header__contact">
          <!--联系方式-->
          <md-list class="md-double-line">
            <md-list-item>
              <img src="./assets/ic_call_black_24px.svg">
              <div class="md-list-item-text">
                <span>18862112646</span>
                <span>Mobile</span>
              </div>
            </md-list-item>
            <md-list-item>
              <img src="./assets/ic_email_black_24px.svg">
              <div class="md-list-item-text">
                <span>413216052@qq.com</span>
                <span>Email</span>
              </div>
            </md-list-item>
          </md-list>
          <!--就职经历-->
          <div class="header__steppers">
            <h4 class="router-link" @click="linkTo('company1')">
              职业生涯：饭蛋网络／阿基米德（2016/11 - 现在）
              <img src="./assets/cc-pointer-left.svg">
            </h4>
            <md-steppers md-vertical>
              <md-step @click.native="linkTo('medical-pc')" id="1" md-label="志尚医学装备平台" md-description="综合网站、在线培训、新闻板块、个人账号管理页面" :md-done="true">
                <p>志尚平台主要用于数据共享，大部分功能需注册账号，涉及医学装备相关领域，除却提供新闻咨询及工程师个人信息展示等功能外，
                更着重共享视频（自己上传／外链接）、PDF文档、故障代码等资料，也有官方课程供工程师学习（视频形式）及自我考试测验，是一个多功能，
                可咨询的大型综合网站。</p>
              </md-step>
              <md-step @click.native="linkTo('medical-mobile')" id="2" md-label="志尚医学装备平台-移动端" md-description="简洁并方便个人使用的微信端志尚SPA应用" :md-done="true">
                <p>拥有基本的志尚医学装备平台的功能，并与微信号绑定，除了让医学工程师更方便的使用外，也主要为了志尚品牌公众号的推广。</p>
              </md-step>
              <md-step @click.native="linkTo('medical-management')" id="3" md-label="志尚医学装备平台-后台管理" md-description="志尚医学装备平台的后台管理web" :md-done="true">
                <p>用于管理员后台管理的页面，同时也提供了课程上传浏览，大量数据的批量操作和用户数据的统一管理。</p>
              </md-step>
              <md-step @click.native="linkTo('hes-mobile')" id="4" md-label="阿基米德医学装备智管平台-移动端" md-description="医院设备作业的SPA应用" :md-done="true">
                <p>医学智管平台，分为PC端与移动端，本人在此项目中独立负责移动端，其中移动端适用于医院内部的医疗装备管理，
                  主要涉及器械的维修、保养、计量、巡检、不良事件记录、设备盘点及使用初期时设备与人员的录入，除却与PC端相同的功能外，
                  为保证医院人员使用该SPA的方便，加入了二维码流程化，即大部分的逻辑操作都可以扫码进行，降低了工作人员与管理人员的工作复杂度。</p>
              </md-step>
            </md-steppers>
          </div>
        </div>
      </div>
    </header>
    <main class="main__content" :class="{main_3d: showMain3D}">
      <router-view v-show="showMain3D"/>
    </main>
    <transition name="back">
      <div class="icon_go-back" v-show="showMain3D" @click="linkTo('', true)">
        <img src="./assets/ic_undo_black_18px.svg">
      </div>
    </transition>
  </div>
</template>

<script>
import ColorfulLabel from '@/components/ColorfulLabel.vue'
import router from '@/router/index'
export default {
  name: 'app',
  components: {
    ColorfulLabel
  },
  data () {
    return {
      showHeaderShrink: false,
      showHeader3D: false,
      showMain3D: false,
      showFooter3D: false,
      skillsArr: [{
        title: 'Javascript',
        content: ['熟悉ES5, ES6, 模块化编写代码', '了解DOM结构与操作']
      }, {
        title: 'css',
        content: ['坚持保持代码的DRY和可维护性, 熟悉CSS继承、层叠、权重等特性，灵活使用选择器', '喜欢跟进CSS新技术', '了解各种布局，熟练应用flexbox布局的同时，保证兼容性']
      }, {
        title: 'Html',
        content: ['了解渲染原理', '理解web标准,编写语义化代码', '擅搭配vue框架进行多种效果的实现']
      }, {
        title: 'Webpack',
        content: ['会配置基本的conf.js，了解其运作']
      }, {
        title: 'Vue',
        content: ['熟练使用响应式编程、组件化，对项目前端构建有一定研究，习惯用框架编写动画']
      }, {
        title: '各类组件库',
        content: ['vux', 'element-ui', 'Material Design(包括MDL/MDC)', 'e-chart', 'and so on']
      }, {
        title: '前后端分离',
        content: ['使用axios进行异步的代码编写', '很注重写可维护、可扩展的代码，保证代码的逻辑清晰、整洁及规范的命名', '尽可能的优化性能，也是目前正在学习的重点']
      }],
      colorParam: 210,
      colorArr: []
    }
  },
  methods: {
    linkTo (url, state) {
      this.showHeader3D = true
      this.showMain3D = true
      router.push(url)
      if (state) {
        this.showHeader3D = false
        this.showMain3D = false
      }
    }
  },
  mounted () {
  }
}
</script>
<style>
  @import "./style/header_private.css";
  @import "./style/main_private.css";
  @import "./style/ui-self.css";
  * {
    transition: all .8s;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: rgb(63, 82, 99);
    height: 100vh;
    overflow: hidden;
  }
  body {
    -webkit-perspective: 1000px;
    padding: .7em;
  }
  #app {
    font-family: 'Avenir', 微软雅黑, Helvetica, sans-serif, 'Pingfang SC', 'Lantinghei SC', 'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
    color: #fff;
    line-height: 1.5;
  }
  ::-webkit-scrollbar {width: 0px;height: 1px;}::-webkit-scrollbar-thumb {border-radius: 5px;-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);background: rgba(0, 0, 0, 0.2);}

  header:hover, main:hover{
    box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
  }
  .skills-label {
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px 5px 5px 0;
    display: inline-block;
    cursor: pointer;
  }

  .icon_go-back {
    position: absolute;
    left: calc(50% - 9px);
    bottom: 20px;
    cursor: pointer;
  }
  .icon_go-back img {
    transform: rotate(30deg);
  }
  .back-enter-to, .back-leave {
    transform: translateY(0px);
    opacity: 1;
  }
  .back-enter, .back-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

  @media screen and (min-width: 1500px) {
    body {
      -webkit-perspective: 1100px;
    }
    header, main, .md-stepper-text {
      font-size: 16px;
    }
    .md-stepper-description {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1800px) {
    body {
      -webkit-perspective: 1300px;
    }
    header, main, .md-stepper-text {
      font-size: 18px;
    }
    .md-stepper-description {
      font-size: 14px;
    }
  }
</style>
