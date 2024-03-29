<template>
  <div
    class="suspend_ball_wrapper"
    :style="{
      position: dragableRange === 'window' ? 'fixed' : 'absolute',
      ...position
    }"
  >
    <div v-if="dragable" class="suspend_ball" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <div class="slots" :class="[slotsDirectionData]">
        <slot />
      </div>
    </div>
    <div v-else class="suspend_ball">
      <div class="slots" :class="[slotsDirectionData]">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
/**
  dragableRange: 拖动范围。parent 父级 window 可视窗口
  dragable: 是否可拖动。默认 true
  position：初始位置。[object Object] top、left、right、bottom
  indent：是否需要缩进。默认 false
  indentDelayTime：延时缩进。单位：ms, 为 0 则不缩进
  indentDistance：缩进距离。单位：px
  needNearEdge：拖动悬浮球后是否需要贴边。默认：false
  nearEdgeTransition: 贴边过渡动画，transition 属性值。默认：'all ease 0.3s'
  nearEdgeDirection：拖动悬浮球后贴边方向。默认贴边方向为距离最近的方向。
  indentNearEdge：悬浮球贴边后是否需要缩进（此时缩进方向为贴边的方向）。默认 false
  indentNearEdgeDelay: 悬浮球贴边后延时缩进。单位：ms，默认 1000，为 0 则不延时
  
  ## 事件
  touchFunc：点击悬浮球后回调事件
  
  ## slots
  slotsDirection：插槽内容方向，默认置于悬浮球右边（如不设置且已开启 needNearEdge，则自动根据贴边情况来改变方向）
 */
export default {
  name: 'RbH5FloatBtn',
  data() {
    return {
      left: 0,
      top: 0,
      touchType: 0, //触摸类型 1拖动悬浮球 0点击悬浮球
      indentTimer: null,
      indentNearEdgeTimer: null,
      slotsDirectionData: 'right'
    }
  },
  props: {
    dragable: {
      type: Boolean,
      default: true
    },
    dragableRange: {
      type: String,
      default: 'parent'
    },
    position: {
      type: Object,
      default: function () {
        return {
          left: 0,
          top: 0
        }
      }
    },
    indent: {
      type: Boolean,
      default: false
    },
    indentDelayTime: {
      type: Number,
      default: 1000
    },
    indentDistance: {
      type: Number,
      default: 30
    },
    indentNearEdge: {
      type: Boolean,
      default: false
    },
    needNearEdge: {
      type: Boolean,
      default: false
    },
    nearEdgeTransition: {
      type: String,
      default: 'all ease 0.3s'
    },
    nearEdgeDirection: String,
    indentNearEdgeDelay: {
      type: Number,
      default: 1000
    },
    slotsDirection: {
      type: String,
      default: 'right'
    }
  },
  created() {
    this.slotsDirection && (this.slotsDirectionData = this.slotsDirection)
  },
  mounted() {
    if (this.indent && this.indentDelayTime) {
      this.setIndent()
    }
  },
  methods: {
    touchstart(e) {
      const el = this.$el

      e.preventDefault()
      //触摸类型 1拖动悬浮球 0点击悬浮球
      this.touchType = 0
      this.$el.style.transition = 'none'
      this.clearAllTimeout()

      //手指按下时的坐标
      const starX = e.touches[0].clientX
      const starY = e.touches[0].clientY

      this.starX = starX
      this.starY = starY

      //手指相对元素本身位置
      this.distanceX = starX - el.offsetLeft
      this.distanceY = starY - el.offsetTop
    },
    touchmove(e) {
      //手指移动到的坐标
      const moveX = e.touches[0].clientX
      const moveY = e.touches[0].clientY

      //手指移动距离
      const moveXDistance = moveX - this.starX
      const moveYDistance = moveY - this.starY

      //设置位置
      let left = moveX - this.distanceX
      let top = moveY - this.distanceY

      //处理点击产生的细微移动
      if (Math.abs(moveXDistance) > 15 || Math.abs(moveYDistance) > 15) {
        this.touchType = 1
      }

      this.validMove(left, top)
    },
    touchend() {
      if (this.touchType === 0) {
        this.$emit('touchFunc')
      }

      //是否需要缩进
      if (this.needNearEdge) {
        const { self_offsetWidth, self_offsetHeight, parent_offsetWidth, parent_offsetHeight } =
          this.getSelfAndParentOffset()

        const obj = {
          left: parseFloat(this.$el.style.left),
          top: parseFloat(this.$el.style.top)
        }

        obj.right = parent_offsetWidth - obj.left - self_offsetWidth
        obj.bottom = parent_offsetHeight - obj.top - self_offsetHeight

        //各方向中最小值
        let minKey = ''

        //计算贴边方向
        if (this.nearEdgeDirection) {
          minKey = this.nearEdgeDirection
        } else {
          let min = Math.min()
          for (const key in obj) {
            const val = parseFloat(obj[key])
            if (val < min) {
              min = val
              minKey = key
            }
          }
        }

        //设置贴边过渡
        if (this.nearEdgeTransition) {
          this.$el.style.transition = this.nearEdgeTransition
        }

        //设置贴边
        this.$el.style[minKey] = 0

        //设置贴边后缩进
        if (this.indentNearEdge) {
          if (this.indentNearEdgeDelay !== 0) {
            clearTimeout(this.indentNearEdgeTimer)

            this.indentNearEdgeTimer = setTimeout(() => {
              this.$el.style[minKey] = -this.indentDistance + 'px'
              this.setOtherDirectionVal(minKey, this.indentDistance)
            }, this.indentNearEdgeDelay)
          } else {
            this.$el.style[minKey] = -this.indentDistance + 'px'
          }
        }

        this.setOtherDirectionVal(minKey)
      }
    },

    //移动
    validMove(left, top) {
      const { self_offsetWidth, self_offsetHeight, parent_offsetWidth, parent_offsetHeight } =
        this.getSelfAndParentOffset()

      if (left + self_offsetWidth > parent_offsetWidth) {
        left = parent_offsetWidth - self_offsetWidth
      }
      if (top + self_offsetHeight > parent_offsetHeight) {
        top = parent_offsetHeight - self_offsetHeight
      }
      if (left <= 0) {
        left = 0
      }
      if (top <= 0) {
        top = 0
      }

      this.$el.style.left = left + 'px'
      this.$el.style.top = top + 'px'
      this.left = left
      this.top = top
      this.right = 'auto'
      this.bottom = 'auto'
    },

    //设置缩进
    setIndent(delayTime) {
      clearTimeout(this.indentTimer)
      this.indentTimer = setTimeout(() => {
        let direction
        let el = this.$el
        const positionObj = this.getPositionComputedStyle()
        for (const key in positionObj) {
          if (parseFloat(positionObj[key]) === 0) {
            direction = key
          }
        }

        el.style[direction] = el.style[direction] - this.indentDistance + 'px'
      }, delayTime || this.indentDelayTime)
    },

    //设置其他方向position值
    setOtherDirectionVal(minKey, indentDistance = 0) {
      const { parent_offsetWidth, parent_offsetHeight, self_offsetWidth, self_offsetHeight } =
        this.getSelfAndParentOffset()

      let slotsDirection = ''

      switch (minKey) {
        case 'left':
          this.$el.style['right'] = parent_offsetWidth - self_offsetWidth + indentDistance + 'px'
          slotsDirection = 'right'
          break
        case 'right':
          this.$el.style['left'] = parent_offsetWidth - self_offsetWidth + indentDistance + 'px'
          slotsDirection = 'left'
          break
        case 'top':
          this.$el.style['bottom'] = parent_offsetHeight - self_offsetHeight + indentDistance + 'px'
          slotsDirection = 'bottom'
          break
        case 'bottom':
          this.$el.style['top'] = parent_offsetHeight - self_offsetHeight + indentDistance + 'px'
          slotsDirection = 'top'
          break
      }

      //设置插槽方向(未设置slotsDirection则自动判断)
      if (!this.slotsDirection) {
        this.slotsDirectionData = slotsDirection
      }
    },

    //计算offset值
    getSelfAndParentOffset() {
      const ifwindowRange = this.dragableRange === 'window'
      const parent_offsetWidth = !ifwindowRange ? this.$el.parentNode.offsetWidth : window.innerWidth
      const parent_offsetHeight = !ifwindowRange ? this.$el.parentNode.offsetHeight : window.innerHeight
      const self_offsetWidth = this.$el.offsetWidth
      const self_offsetHeight = this.$el.offsetHeight
      return {
        parent_offsetWidth,
        parent_offsetHeight,
        self_offsetWidth,
        self_offsetHeight
      }
    },

    getPositionComputedStyle() {
      let el = this.$el
      let style = getComputedStyle(el)
      const positionObj = {
        top: style.top,
        bottom: style.bottom,
        left: style.left,
        right: style.right
      }
      return positionObj
    },

    clearAllTimeout() {
      clearTimeout(this.indentTimer)
      clearTimeout(this.indentNearEdgeTimer)
    }
  }
}
</script>
<style lang="less" scoped>
.suspend_ball_wrapper {
  position: absolute;
  // top: 0;
  // left: 0;
  width: 60px;
  height: 60px;
  z-index: 1000;
  .suspend_ball {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
    background-image: url('https://img0.baidu.com/it/u=272572278,3446974957&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500');
    .slots {
      position: absolute;
      width: fit-content;
      height: 100%;
      &.right {
        left: calc(100% + 10px);
      }
      &.left {
        right: calc(100% + 10px);
      }
      &.top {
        bottom: calc(100% + 10px);
      }
      &.bottom {
        top: calc(100% + 10px);
      }
    }
  }
}
</style>
