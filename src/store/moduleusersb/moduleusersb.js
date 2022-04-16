import axios from "axios";
let moduleusersb = {
  namespaced: true,
  state:{
    users:[]
  },
  mutations:{
    mut_getusers(state,payload){
      state.users = payload
    }
  },
  actions:{
    async act_getusers(context,payload){
      let {data} = await axios.get('/api/bgetusers')
      console.log(data);
      context.commit('mut_getusers',data)
    }
  },
  getters:{
    getuser:(state)=>(payload)=>{
      return state.users.filter(item=>item.username==payload)[0]
    }
  }
}
export default moduleusersb