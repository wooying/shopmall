import {debounce} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 3.监听item中图片加载完成
    this.itemImgListener = () => {
      // console.log('-----');
      refresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log('混入');
  }
}

export const backTopMinin = {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0,300);
    }
  }
}