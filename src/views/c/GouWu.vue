<template>
    <div class="div">
       <div class="imgdiv">
        <img src="../../../img/1.png" alt="" class="img">
      </div>
      <div class="div2">
          <p>你的购物车空空如也</p>
            <div class="btn">
          <button>逛逛吧</button>
        </div>
      </div>
      
    </div>
</template>
<script>


export default ({
    name:"GouWu"
})
</script>
<style scoped>
  .imgdiv{
  width: 90%;
   margin: 30px auto;
}
.div2{
  width: 260px;
  /* height: 24px; */
  font-size:24px;
  margin: 0 auto;
}
.btn button{
  font-size: 24px;
  color: red;
  border: 0;
  margin: 0 auto;

}
</style>
