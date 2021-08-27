<template>
  <div class="bottom-bar">
    <div class="check-content">
       <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
       <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preval, item) => {
        return preval + item.price * item.count;
      }, 0).toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if(this.$store.state.cartList.length == 0) {
        return false;
      }
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品', 2000);
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
  }
  .check-content {
    display: flex;
    align-items: center;
    width: 60px;
    margin-left: 10px;
  }
  .check-button {
    width: 22px;
    height: 22px;
    line-height: 23px;
    margin-right: 5px;
  }
  .price {
    margin-left: 30px;
    flex: 1;
  }
  .calculate {
    width: 90px;
    background-color: orange;
    text-align: center;
  }
</style>