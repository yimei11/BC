let Mock = require("mockjs")
Mock.mock("/api/login",'post',function(config){
    console.log(config.body)// 参数
    let obj = JSON.parse(config.body) // 后台拿到的参数都是字符串
    let user = obj.user
    let pw = obj.pw
    if(user=="123456789"&&pw=="11223"){
        return { 
            status:200,
            message:"success",
            data:{user:"admin",pw:"123456",token:"shduawhdua"}
        }
    }else{
        return {
            status:200,
            message:"fail",
            data:{message:"用户密码错误"}
        }
    }
})