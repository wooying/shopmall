<template>
  <div>
    <div class="use-info">
      <div class="user-prev">
      <div class="icon"><img src="~assets/img/profile/avatar.svg" alt=""></div>
        <div>
          <div class="login">登录/注册</div>
          <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="">
          暂无绑定手机
          </div>
        </div>
      </div>
    </div>
    <div class="user-next">
      <div class="box">
        <div><b>0.00</b>元<br>
        <span>我的余额</span></div>
      </div>
      <div class="box">
        <div><b>0</b>个<br>
        <span>我的优惠</span></div>
      </div>
      <div class="box">
        <div><b>0</b>分<br>
        <span>我的积分</span></div>
      </div>
    </div>
    <div class="cons"></div>
  </div>
  
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>
  .use-info {
    position: relative;
    color: #fff;
    padding: 10px;
    background-color: var(--color-tint);
  }
  .user-prev {
    display: flex;
    align-items: center;
  }
  .icon img{
    width: 70px;
    height: 70px;
  }
  .login {
    margin: 0 0 3px 7px;
  }
  .phone {
    font-size: 15px;
  }
  .phone img {
    width: 26px;
    vertical-align: top;
  }
  .use-info::after {
    position: absolute;
    right: 20px;
    top: 37px;
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg);
  }
  .user-next {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .user-next .box {
    flex: 1;
    height: 80px;
    text-align: center;
  }
  .user-next .box div {
    margin: 22px;
  }
  .user-next div:nth-child(2) {
    flex: 1;
    text-align: center;
    border-left: 1px solid #f7f7f7;
    border-right: 1px solid #f7f7f7;
  }
  .user-next div b {
    font-size: 24px;
    color: #FF4040;
  }
  .cons {
    height: 12px;
    background-color: #eeeeee;
  }
</style>