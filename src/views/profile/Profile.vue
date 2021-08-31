<template>
  <div id="profile">
    <nav-bar class="nav"><div slot="center">购物商城</div></nav-bar>
    <user-info></user-info>
    <list-view :listData="orderList"></list-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo.vue'
import ListView from './childComps/ListView.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    ListView
  },
  data() {
    return {
      orderList: [
        {imgURL: require('assets/img/profile/message.svg'), info: '我的消息'},
        {imgURL: require('assets/img/profile/pointer.svg'), info: '积分商城'},
        {imgURL: require('assets/img/profile/vip.svg'), info: '会员卡'}
      ]
    }
  }
}
</script>

<style scoped>
  .nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>