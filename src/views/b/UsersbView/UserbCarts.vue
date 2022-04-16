<template>
  <div class="userbcarts" v-if="username" style="width: 90%;margin:0 auto;">
    <div class="titletop">
      <div class="userInfo">
        <b>用户: {{username}}</b>
      </div>
      <div class="done">
        <input type="text">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <el-table v-if="usero" :data="usero.gouwuche" >
      <el-table-column label="商品 ID" prop="id">
      </el-table-column>
      <el-table-column label="商品名称" prop="title">
      </el-table-column>
      <el-table-column label="优惠" prop="box">
      </el-table-column>
      <el-table-column label="品牌" prop="brand">
      </el-table-column>
      <el-table-column label="商品图片" prop="imgsrc">
        <template v-slot="scope">
          <img :src="scope.row.imgsrc" alt="" width="90" height="90">
        </template>
      </el-table-column>
      <el-table-column label="价格 (￥)" prop="price">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">操作</template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name:"UserbCarts",
  props:['username'],
  data () {
    return {
    }
  },
  computed: {
    ...mapState('moduleusersb',['users']),
    ...mapGetters('moduleusersb',['getuser']),
    usero(){
      let username = this.username
      // console.log(username);
      return this.getuser(username)
    }
  },
  methods: {
    ...mapActions('moduleusersb', ['act_getusers']),
    handleEdit(a,b){
      console.log(a,b);
    },
    handleDelete(a,b){
      console.log(a,b);
    }
  },
  created () {
    this.act_getusers()
  }
}
</script>
<style scoped>
.userbcarts{
  font-size:14px;
}
.titletop{
  padding:10px 20px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  border:1px solid blue;
  margin-bottom:20px;
}
</style>