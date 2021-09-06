<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @loadMore="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata} from 'network/home'
import {getHomeGoods} from 'network/home'
import {itemListenerMixin, backTopMinin} from 'common/mixin.js'

// import {SwiperItem} from 'components/common/swiper/SwiperItem'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null
    }
  },
  mixins: [itemListenerMixin, backTopMinin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据 页面一打开就请求第一个数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  destroyed() {
    // console.log('tabControl1');
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1.保存y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 2.取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  mounted() {
    
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    
    contentScroll(position) {
      // console.log(position);
      // 1.判断backTop是否显示
      this.isShow = -(position.y) > 1000,
      // 2.决定tabControl是否吸顶
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    loadMore() {
      // console.log('loadMore');
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      // 1.赋值
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // this.result = res;
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
      console.log(res);
      // 将请求的数据保存
      // this.goods[type].list = res.data.list;
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
      this.$refs.scroll.finishPullUp();
    })
    }
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    /* padding-top: 44px; */
    height: 100vh;
  }
  /* #home { */
    /* padding-top: 44px; */
    /* height: 100vh;
  } */
  .home-nav {
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    /* width: 100px; */
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>