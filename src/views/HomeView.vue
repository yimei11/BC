<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <ol>
      <li v-for="(item,index) in arr" :key="index">{{index}}</li>
    </ol> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import axios from 'axios';
export default {
  name: "HomeView",
  data(){
    return {
      arr:null
    }
  },
  components: {
    
  },
  methods:{
    // async getdata(){
    //   let {data} = await axios.get('/api/classify')
    //   console.log(data);
    //   this.arr = data
    // }
  },
  created(){
    // this.getdata()
  }
};
</script>
