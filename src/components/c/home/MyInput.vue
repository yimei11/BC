<template>
  <div class="zhong">
    <div class="inp-shuru">
      <div class="shuru">
        <van-icon name="search" size=".4rem" color="#ee0a24" />
        <input type="text" placeholder="在千万海外商品中搜索" />
      </div>
      <div class="anniu">
        <span>登录 / 注册</span>
      </div>
    </div>
    <div class="zhongxai">
        <div class="zhodiv"><img src="https://kaola-haitao.oss.kaolacdn.com/41f1fe73-5694-41b9-8151-82a3f11bde29T2103032217_192_200.png?x-oss-process=image/resize,w_150,h_0/quality,q_95" alt=""></div>
        <div class="zhodiv"><img src="https://kaola-haitao.oss.kaolacdn.com/8b3a6fa2-764c-4054-b6e5-809628af6865T2103032218_192_200.png?x-oss-process=image/resize,w_150,h_0/quality,q_95" alt=""></div>
        <div class="zhodiv"><img src="https://kaola-haitao.oss.kaolacdn.com/fc613589-89cf-4b49-9bf1-1e10e61b8565T2103032218_192_200.png?x-oss-process=image/resize,w_150,h_0/quality,q_95" alt=""></div>
        <div class="zhodiv"><img src="https://kaola-haitao.oss.kaolacdn.com/0a897961-776a-4b43-8260-59bd70cfd96fT2103032218_192_200.png?x-oss-process=image/resize,w_150,h_0/quality,q_95" alt=""></div>
        <div class="zhodiv"><img src="https://kaola-haitao.oss.kaolacdn.com/42437047-6a99-466a-b6f2-37b09f913613T2203081714_192_200.png?x-oss-process=image/resize,w_150,h_0/quality,q_95" alt=""></div>
    </div>
    <div class="kongbai">
      <img src="https://kaola-haitao.oss.kaolacdn.com/d73d06b9-0f96-4cf2-a7c1-d2cab0acd545T2204061451_900_226.jpg?x-oss-process=image/resize,w_702,h_177/quality,q_95" alt="">
    </div>
  </div>
</template>
<script>

export default ({
    name:"MyInput"
})
</script>
<style scoped>
.zhong{
    display: flex;
    flex-direction: column;
}
.inp-shuru {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.shuru {
  margin: 0.1rem;
  width: 5rem;
  height: 0.6rem;
  border: 1px solid red;
  display: flex;
  align-items: center;
  border-radius: 1rem;
}
.shuru i {
  padding: 0 0.1rem;
}
.shuru input {
  width: 80%;
  height: 90%;
  border: none;
  font-size: 0.28rem;
}

.anniu {
  font-size: 0.24rem;
  width: 1.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 1px solid red;
  border-radius: 0.06rem;
  color: red;
}
.anniu span {
  display: inline-block;
  padding: 0 0.1rem;
}
.zhongxai{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .1rem;
}
.zhodiv{
    width: 25%;
}
.zhodiv img{
    width: 100%;
}
.kongbai{
  width: 7.3rem;
  padding: .1rem;
}
.kongbai img{
  width: 100%;
}
</style>