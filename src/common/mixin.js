import {debounce} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop'

import {POP, NEW, SELL} from "./const";

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

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
