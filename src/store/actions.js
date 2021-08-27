import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'

export default {
  addCart(context, payload) {
    // state.cartList.push(payload);
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid == payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    // 查找之前商品中是否有该商品
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量加1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve('添加购物车成功')
      }
    })
  }
}