<template>
  <div class="users">
    <!-- userb-{{users}} -->
    <el-table :data="users">
      <el-table-column type="expand">
        <!-- 用户信息 -->
        <template slot-scope="scope">
          <el-form label-position="left" style="background:#ccc;">
            <el-form-item label="用户名">
              <span>{{ scope.row.username}}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ scope.row.address }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ scope.row.telnumber }}</span>
            </el-form-item>           
          </el-form>
          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column label="用户名"  prop="username">
      </el-table-column>
      <el-table-column label="密码"  prop="password">
      </el-table-column>
    </el-table>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import UserbCarts from './UserbCarts.vue'
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name:"UsersbView",
  components: {
    UserbCarts
  },
  data(){
    return{
      data:null
    }
  },
  methods:{
    ...mapActions('moduleusersb',['act_getusers']),
    ...mapMutations('moduleusersb', ['mut_getusers']),
    handleDelete(a,b){
      console.log(a,b);
      let username = b.username
      console.log(username);
      this.$router.push('/userbcarts/'+username)
      // this.$router.push('/userb/userbcarts/'+username)
    }
  },
  computed: {
    ...mapState('moduleusersb',['users'])
  },
  created () {
    this.act_getusers()
  },
  mounted () {
    this.data = this.users
  }
}
</script>
<style scoped>
  .users{
    width:80%;
    margin:0 auto;
  }
</style>
