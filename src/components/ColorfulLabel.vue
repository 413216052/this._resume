<template>
  <div>
    <template v-for="(item,index) in textArr">
      <span :key="index" class="label-box" :style="{background: colorArr[index]}">
        {{item.title}}
        <md-tooltip class="label__tooltip">
          <template v-for="(el,elIndex) in item.content">
            <p :key="elIndex">{{ el }}</p>
          </template>
        </md-tooltip>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ColorfulLabel',
  data () {
    return {
      colorArr: []
    }
  },
  props: {
    textArr: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    changingColor (colorParam = 210) {
      let r, g, b, color
      r = Math.floor(Math.random() * colorParam)
      g = Math.floor(Math.random() * colorParam)
      b = Math.floor(Math.random() * colorParam)
      color = `rgba(${r}, ${g}, ${b}, 0.8)`
      return color
    },
    changeParam (x) {
      let i = 0
      while (i++ < x) {
        this.colorArr.push(this.changingColor())
      }
      console.log('label__专业技能随机颜色框：', this.colorArr)
    }
  },
  mounted () {
    this.changeParam(this.textArr.length)
  }
}
</script>
<style scoped>
  .label-box {
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px 5px 5px 0;
    display: inline-block;
    cursor: pointer;
  }
  .label__tooltip {
    background: rgba(255, 255, 255, 0.9);
  }
</style>
