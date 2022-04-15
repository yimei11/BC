import instance from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arr:null,
    num:1
  },
  getters: {},
  mutations: {
    mutation_getdata(state,payload){
      state.arr = payload
    }
  },
  actions: {
    async action_getdata(context){
      let {data} = await instance.get("/getdata");
      let shops = data;
      context.commit("mutation_getdata",shops)
    },

    async action_deletedata(context,payload){
      console.log(payload);
      let {data} = await instance.delete("/api/deletecart/"+payload);
      context.commit("mutation_getdata",data.data)
      
    },
    

    async action_fixenter(context,payload){

      let {data} = await instance.put("/api/put/"+payload.id ,{...payload});
      context.commit("mutation_getdata",data)
      console.log("123"+data)
    }

  },
  modules: {},
});
