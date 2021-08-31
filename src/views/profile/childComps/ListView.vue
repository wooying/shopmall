<template>
  <div class="list-view">
    <div v-for="(item, index) in listData" :key="index">
      <img :src="item.imgURL" alt="">
      <span>{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .list-view div {
    font-size: 16px;
    width: 100vw;
  }
  .list-view img {
    margin: 10px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .list-view span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: calc(100% - 40px);
    border-bottom: 1px solid #f6f6f6;
  }
</style>