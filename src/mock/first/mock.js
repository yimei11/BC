let Mock = require("mockjs");
var data = [
    {
        "id":0,
        "imgsrc": "https://kaola-pop.oss.kaolacdn.com/070f7e177dcb4c85be456bfc7f82a51b_800_800.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "梅可",
        "title": "MAC魅可尤雾弹/水漾子弹头/经典子弹头口红唇膏新色",
        "box": "券满500减40",
        "price": "52"
    },
    {
        "id":1,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/91f78e97c50b4d7d8d1c62cfc2c771f31556072739743juulj6a110397.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/d3c18d60f0e54c32af5cf24d18be585b1419662519909i46mer1g10007.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "兰蔻",
        "title": "LANCÔME 兰蔻 玫瑰露清滢柔肤粉水 400毫升 干皮真爱",
        "box": "下单立即减20",
        "price": "304"
    },
    {
        "id":2,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/dd2169ddb1a7231255f9e6daf0609b7c.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "科颜氏",
        "title": "【明星面霜】Kiehl's 科颜氏高保湿面霜 125ml 补水修护 角鲨烷保湿不油腻",
        "box": "满400减40",
        "price": "360"
    },
    {
        "id":3,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/729765550a8e000c55f6355b3ac3d9ef.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "雅诗兰黛",
        "title": "【第7代小棕瓶】ESTĒE LAUDER 雅诗兰黛 特润修护肌活精华露 100毫升",
        "box": "下单立即减100",
        "price": "819"
    },
    {
        "id":4,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/02ddd66b2ac87de9467fa7069170b9b2.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/d3c18d60f0e54c32af5cf24d18be585b1419662519909i46mer1g10007.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "兰芝",
        "title": "LΛNEIGE 兰芝 妆前乳雪纱丝柔隔离霜 30毫升 修颜提亮 遮瑕保湿",
        "box": "",
        "price": "88"
    },
    {
        "id":5,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/3e66cc82de6b497aaefdb7f6936d675a1563507202923jy9jtilo10264.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "科颜氏",
        "title": "【阚清子同款】Kiehl's 科颜氏 亚马逊白泥面膜125毫升 专柜当家明星",
        "box": "下单立减10元",
        "price": "225"
    },
    {
        "id":6,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/5291685bb3e1490787c98713569a49021547625926735jqywinne10363.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "伊丽莎白",
        "title": "【500毫升大包装】ElizabethArden 伊丽莎白雅顿 绿茶蜜滴舒体霜 500毫升",
        "box": "下单立减4元",
        "price": "145"
    },
    {
        "id":7,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/ee8462b2ef1742cd96ad38e1343c43df1561970261376jxk4rj3g10319.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "雅诗兰黛",
        "title": "ESTĒE LAUDER 雅诗兰黛 特润修护精华眼霜 小棕瓶“抗蓝光”眼霜 15毫升",
        "box": "",
        "price": "362"
    },
    {
        "id":8,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/1bl7pb26g31_800_800.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1cc2m9est21_46_46.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "SK-LL",
        "title": "SK-II skii  青春露 护肤精华露 精华水（神仙水）230ml毫升",
        "box": "",
        "price": "799"
    },
    {
        "id":9,
        "imgsrc": "https://kaola-pop.oss.kaolacdn.com/78c56c180df84325abef146f4d0cd448_800_800.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/939be9ea4d7b4acbb68e67ab531e0d7f1419664531530i46nlv7t10030.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "五月花",
        "title": "五月花700g12卷4层原木无芯卷纸卷筒卫生纸厕纸母婴适用",
        "box": "",
        "price": "10.1"
    },
    {
        "id":10,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/aba5088f577be7e9c52d9cbe0f68f3c3.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "雪花秀",
        "title": "SULWHASOO 雪花秀 顺行氨基酸洗面奶柔和泡沫洁颜乳 200毫升",
        "box": "下单立减35元",
        "price": "104"
    },
    {
        "id":11,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/5189ac9e-1e29-4f13-baac-faac8f2edeeb.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/d3c18d60f0e54c32af5cf24d18be585b1419662519909i46mer1g10007.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "娇赟诗",
        "title": "CLARINS娇韵诗 双萃赋活精华露50ml 黄金双瓶少女精华",
        "box": "",
        "price": "766"
    },
    {
        "id":12,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/4811ff53ae441073afa530aeff6620be.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1cc2m9est21_46_46.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "肌肤之钥",
        "title": "CPB 肌肤之钥 隔离 妆前乳遮瑕保湿(光采柔滑) 37毫升  新版",
        "box": "",
        "price": "379"
    },
    {
        "id":13,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/189779711e33661fa1f0ba201dbf6f45.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "Whoo后",
        "title": "Whoo后 天气丹花献光彩紧颜水乳霜7件套礼盒",
        "box": "",
        "price": "1095"
    },
    {
        "id":14,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/7fdb7081-defa-45e6-8bed-b995add5242d.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "爱他美",
        "title": "4件装 | 新西兰原装进口 澳洲爱他美白金版婴儿配方奶粉3段 900g 一周岁及以上",
        "box": "满400减200",
        "price": "819"
    },
    {
        "id":15,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/f6301175f47e492ab18a7962a99d32761565262946012jz2l56ti11741.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "Dr.jart",
        "title": "【3盒装 】Dr.Jart+ 蒂佳婷蓝丸面膜女补水保湿海藻救急 5片/盒",
        "box": "满400减200",
        "price": "145"
    },
    {
        "id":16,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/c8bf9b93f8aae53ef0a4c4e63eef114e.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/c0be3e6c11de4adb9ea90df712da9aea1419662386933i46mbwfo10003.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "FINO",
        "title": "Fino 滋润渗透发膜 230克/罐 2件装",
        "box": "满200减100",
        "price": "92"
    },
    {
        "id":17,
        "imgsrc": "https://kaola-haitao.oss.kaolacdn.com/04c252b4ac9c4a7d93181a1f9024d6951573092402964k2o2lmgt11428.jpg?x-oss-process=image/resize,w_300,h_300/quality,q_95",
        "country": "https://kaola-haitao.oss.kaolacdn.com/1077833fa2854dcb97502084f24f449d1419659976324i46kw8bh10001.png?x-oss-process=image/resize,w_30,h_30/quality,q_95",
        "brand": "雅诗兰黛",
        "title": "【DW粉底液】雅诗兰黛持妆粉底液 油皮亲妈  持久不脱妆遮瑕控油防晒",
        "box": "下单立减10元",
        "price": "225"
    }
];

Mock.mock("/api/getdata","get",function(cofing){
    return data
})


Mock.mock(/\/api\/deletecart\/\d/,'delete',function(cofing){
    let id = cofing.url.split("/").pop();
    data.splice(id,1);
    data = data.map(function(item,id){
        return {
            id,
            imgsrc:item.imgsrc,
            country:item.country,
            brand:item.brand,
            title:item.title,
            box:item.box,
            price:item.price,
        }
    })
    return {
        status:200,
        message:"删除成功",
        data:data
    }
})


Mock.mock(/\/api\/put\/\d/,'put',function(config){
    console.log(config);
    console.log(config.url);
    let arr = config.url.split("/")
    let id = arr.pop() // 获取id
    let canshu = config.body  // string
    canshu = JSON.parse(canshu) // obj
    data[id].title = canshu.title
    data[id].price = canshu.price
    // console.log(data);
    return data
})




