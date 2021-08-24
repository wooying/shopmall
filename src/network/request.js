import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1 请求拦截的作用
    instance.interceptors.request.use(config => {
      return config
    },err => {
      // console.log(err);
    })
    // 2.2 响应拦截
    // 服务器已经响应过了 这里拿到的是结果
    instance.interceptors.response.use(res => {
      // 这里我们将结果拦截掉了 所以必须返回data,data才是真正的结果
      return res.data;
    }, err => {
      console.log(err);
    })

    // 3.发送真正的网络请求
    // 本身它返回的时候就是promise
    return instance(config)
}

