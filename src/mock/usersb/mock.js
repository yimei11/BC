let Mock = require('mockjs');
let data={
  products:[],
  users:[
    {
      username:'admin',
      password:'12345678',
      address:'北京昌平区',
      telnumber:12345678910,
      gouwuche:[
        {
          id:0,
          imgsrc: "https://kaola-pop.oss.kaolacdn.com/070f7e177dcb4c85be456bfc7f82a51b_800_800.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
          country: "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
          brand: "梅可",
          title: "MAC魅可尤雾弹/水漾子弹头/经典子弹头口红唇膏新色",
          box: "券满500减40",
          price: "52"
        },
        {
          id:1,
          imgsrc: "https://kaola-haitao.oss.kaolacdn.com/91f78e97c50b4d7d8d1c62cfc2c771f31556072739743juulj6a110397.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
          country: "https://kaola-haitao.oss.kaolacdn.com/d3c18d60f0e54c32af5cf24d18be585b1419662519909i46mer1g10007.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
          brand: "兰蔻",
          title: "LANCÔME 兰蔻 玫瑰露清滢柔肤粉水 400毫升 干皮真爱",
          box: "下单立即减20",
          price: "304"
        }
      ]
    },
    {
      username:'login',
      password:'12345678',
      address:'北京昌平区',
      telnumber:12345678910,
      gouwuche:[
        {
          id:2,
          imgsrc: "https://kaola-haitao.oss.kaolacdn.com/dd2169ddb1a7231255f9e6daf0609b7c.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
          country: "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
          brand: "科颜氏",
          title: "【明星面霜】Kiehl's 科颜氏高保湿面霜 125ml 补水修护 角鲨烷保湿不油腻",
          box: "满400减40",
          price: "360"
        }
      ]
    }
  ]
}
//c端登录 axios.post('/api/clogin',{username,password})
Mock.mock('/api/clogin','post',function(config){
  let obj = JSON.parse(config.body)
  let user = data.users.filter(item=>item.username==obj.username&&item.username==obj.password)
  if(user.length){//长度为0 ，那么就是没有符合的
    //注册
    return {
      message:"fail",
      data:{message:"登录失败"}
    }
  }else{
    //登录成功
    return {
      message:"success",
      data:{
        message:"登录成功",
        data:user.gouwuche,
        token:'zb'
      }
    }
  }
})
//c端注册 axios.post('/api/cregister',{username,password})
Mock.mock('/api/cregister','post',function(config){
  let obj = JSON.parse(config.body)
  let user = data.users.find(item=>item.username==obj.username)
  if(user){//true 就是注册失败，data中有了
    //重新注册
    return {
      message:"fail",
      data:{message:"注册失败"}
    }
  }else{
    data.users.push({
      username:obj.username,
      password:obj.password,
      gouwuche:[]
    })
    return {
      message:"success",
      data:{
        message:"注册成功",
        token:'zb'
      }
    }
  }
})
//b端 
//get
Mock.mock('/api/bgetusers','get',data.users)
//post
Mock.mock()
//put
Mock.mock()
//delete
Mock.mock()