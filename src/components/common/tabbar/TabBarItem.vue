<template>
<!-- 所有的item都展示同一个图片 同一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <slot :class="{active: isActive}" name="item-text"></slot> -->
    <!-- <img src="../../assets/img/tabbar/pic111.png" alt="">
        <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      //this.$route.path 就是/home
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
  /* .active {
    color: red;
  } */
</style>