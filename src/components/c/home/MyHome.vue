<template>
  <div>
    <div class="top-tit">
      <div class="top-zuo">
        <div class="top-imgs">
          <img
            src="https://kaola-haitao.oss.kaolacdn.com/fd54462a-e0a6-4598-8808-5be6432cd362T2008202125_180_180.png?x-oss-process=image/resize,w_80,h_0/quality,q_85"
            alt=""
          />
        </div>
        <div class="top-tits">
          <span class="top-tits-title">【考拉海购】官方自营 正品保障</span>
          <span class="top-tits-span">下载APP新人可享125元购物礼包</span>
        </div>
      </div>
      <div class="top-btn">
        <button>打开APP</button>
      </div>
    </div>
  </div>
</template>
<script>

export default ({
    name:"MyHome"
})
</script>
<style scoped>
.top-tit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
}
.top-zuo {
  display: flex;
  justify-content: space-between;
}
.top-imgs {
  width: 0.8rem;
  height: 0.8rem;
  display: flex;
  border-radius: 2.13333vw;
  box-shadow: 0 0 0.93333vw 0 rgb(0 0 0 / 15%);
  margin: 0 0.2rem 0 0.26rem;
}
.top-imgs img {
  width: 100%;
  height: 100%;
}
.top-tits {
  display: flex;
  flex-direction: column;
}
.top-tits-title {
  color: #333;
  font-size: 0.28rem;
}
.top-tits-span {
  color: #999;
  font-size: 0.26rem;
}
.top-btn {
  width: 1.9rem;
  height: 1.2rem;
  display: flex;
}
.top-btn button {
  width: 100%;
  height: 100%;
  border: none;
  background: red;
  color: #fff;
  font-size: 0.34rem;
}
</style>