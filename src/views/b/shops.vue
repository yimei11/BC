<template>
  <div class="box">
    <el-table :data="this.$store.state.arr">
      <el-table-column prop="id" label="id"  align="center"> </el-table-column>
      <el-table-column prop="title" label="名字"  align="center"> </el-table-column>
      <el-table-column prop="imgsrc" label="图片"  align="center"> 
        <template v-slot="scope">
          <img :src="scope.row.imgsrc" alt="" width="90" height="90">
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格"   align="center"> </el-table-column>
      <el-table-column label="操作"  align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- 弹窗 -->
     <el-dialog
      :title="'编辑用户'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="图片" :label-width="formLabelWidth">
          <img :src="form.imgsrc" alt="">
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fixenter">确 定</el-button>
      </div>
    </el-dialog>

  </div>


  
</template>


<script>
// import instance from "../../api/index";
export default {
  name: "shops",
  data() {
    return {
      arr: null,
      dialogFormVisible:false,
      formLabelWidth:"100px",
      form:{
        title:"",
        price:"",
        imgsrc:"",
        id:""
      }
    };
  },
  methods: {
    

    getshops() {
      this.$store.dispatch("action_getdata");
    },
    handleDelete(a) {
      this.$store.dispatch("action_deletedata",a);
    },
    handleEdit(a,b){
      this.dialogFormVisible = !this.dialogFormVisible
      this.$store.dispatch("action_fixdata",a)
      this.form.title = b.title
      this.form.price = b.price
      this.form.imgsrc = b.imgsrc
      this.form.id = b.id
    },
    fixenter(){
      this.$store.dispatch("action_fixenter",this.form);
      this.dialogFormVisible = !this.dialogFormVisible
      
    }
  },
  created() {
    // this.getdata();
    this.getshops();
  },
};
</script>