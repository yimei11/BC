<template>
  <div class="login">
    <div class="imgdiv">
      <img src="../../../img/1.png" alt="" class="img" />
    </div>
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        label=""
        style="
          border-radius: 50px;
          background: #eee;
          width: 90%;
          margin: 0 auto;
        "
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label=""
        style="
          border-radius: 50px;
          background: #eee;
          width: 90%;
          margin: 10px auto;
        "
        placeholder="请输入密码"
        :rules="[{ required: true, message: '' }]"
      />
      <van-checkbox v-model="checked" class="p"
        >我已阅读并同意隐私政策和服务协议</van-checkbox
      >
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          class="btn"
          @click="submitfn"
          >登录</van-button
        >
      </div>
      <div class="ccc">
        <p>忘记密码</p>
        <p>使用短信验证码登录</p>
      </div>
      <div class="zzz">
        <p>使用其他方式登录</p>
      </div>
    </van-form>
  </div>
</template>
<script>
import instance from "../../api/index";
export default {
  name: "MyLogin",

  data() {
    return {
      username: "123456789",
      password: "11223",
      checked: true,
      newdebouncefn: null, //用于接受防抖封装后的业务函数
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 1000);
    // 就是防抖封装后的新的业务函数
  },
  methods: {
    submitfn() {
      // 点击提交业务
      // this.loginfn()
      this.newdebouncefn();
    },
    async loginfn() {
      // 登录业务
      let user = this.username;
      let pw = this.password;
      let { data } = await instance.post("/login", { user, pw });
      console.log(data);
      console.log(data.data.token);
      if (data.message === "fail") return this.$notify("用户名密码错误");
      if (data.message === "success") {
        // 存token
        localStorage.setItem("token", data.data.token);
        this.$notify({
          type: "success",
          message: "登录成功",
          onClose: () => {
            this.$router.push({ name: "gw" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>
.login {
  width: 100%;
}
.imgdiv {
  width: 90%;
  margin: 30px auto;
}
.img {
  width: 156px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.p {
  font-size: 12px;
  color: #999;
  width: 90%;
  margin: 0 auto;
}
.btn {
  background: #ff9000;
  color: #fff;
}
.ccc {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.ccc p {
  font-size: 12px;
  color: #999;
}
.zzz {
  width: 100px;
  height: 16px;
  margin: 0 auto;
  color: #666;
  font-size: 10px;
}
</style>
