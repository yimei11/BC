<template>
  <div class="flex">
    <div v-for="(item, index) in mess" :key="index" class="kuai">
      <div class="img">
        <img :src="item.imgsrc" alt="" />
      </div>
      <div class="p_f">
        <div class="c_b">
          <div class="c_bimg">
            <img :src="item.country" alt="" />
          </div>
          <div>{{ item.brand }}</div>
        </div>
        <div class="t_t">
          <p>{{ item.title }}</p>
        </div>
        <div class="b_b">
          <span :class="item.box ? 'bian' : ''">{{ item.box }}</span>
        </div>
        <div class="p_p">
          ￥<span>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default ({
    name:"XuanRan",
    data(){
        return{
             bind:'bind'
        }
    },
    props:["mess"]
})
</script>
<style scoped>
.flex {
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #e5e2e2;
}
.kuai {
  width: 48%;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 0.05rem 0;
}
.kuai .img {
  display: flex;
  align-items: center;
  width: 100%;
}
.kuai .img img {
  width: 100%;
}
.p_f{
  padding: 0 10px;
}
.c_b {
  display: flex;
  font-size: 0.24rem;
}
.c_b .c_bimg {
  width: 0.32rem;
  height: 0.32rem;
}
.c_b .c_bimg img {
  width: 100%;
  height: 100%;
}
.t_t p {
  font-size: 0.26rem;
  line-height: 0.26rem;
  height: 0.52rem;
  overflow: hidden;
}
.b_b {
  font-size: 0.24rem;
  color: red;
  margin: 0.1rem;
}
.b_b span {
  padding: 0.05rem 0.1rem;
}
.bian {
  border: 0.01rem solid red;
}
.p_p {
  font-size: 0.24rem;
  color: red;
}
.p_p span {
  font-size: 0.4rem;
}
</style>