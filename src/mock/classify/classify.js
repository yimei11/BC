let Mock = require('mockjs');

let datas = {
    品牌墙: {
        考拉海购出品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        美容彩妆: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        奶粉纸尿裤: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        母婴专区: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        营养保健: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        环球美食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        数码家电: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        个人护洗: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        奢品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        服饰鞋靴: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        运动户外: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        手表配饰: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        家居生活: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        充值中心: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        生鲜: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    美容彩妆: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        美容护肤: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        彩妆香氛: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        男士护肤: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    奶粉纸尿裤: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        奶粉: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        纸尿裤拉拉裤: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    母婴专区: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        辅助营养: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        喂洗养护: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        孕妈: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        儿童玩具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        家居出行: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        童装童鞋: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    营养保健: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        女性健康: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        男士必备: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        父母长辈: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        滋补养生: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        运动营养: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        日常护理: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    数码家电: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        手机数码: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        个护电器: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        生活电器: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        厨房电器: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        "办公/外设": [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        大家电: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        特色专区: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    个人护洗: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        居家清洗: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        口腔护理: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        女性护洗: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        健康护理: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    奢品: {
        精选频道: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        大牌推荐: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        女包: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        男包: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        女装: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        男装: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    服饰鞋靴: {
        热卖推荐: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        时尚新女性: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        潮流新男装: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    运动户外: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        运动鞋服: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        运动用品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        户外装备: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        国际大牌: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        国潮盛典: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        时尚背包: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        澳洲雪地靴: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        瑜伽美体: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        游泳用品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        火机烟具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    手表配饰: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        腕表: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        时尚饰品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        黄金珠宝: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        眼睛配件: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    家居生活: {
        热销分类: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        杯具水具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        烹饪锅具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        刀具菜板: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        餐具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        家纺布艺: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        生活日用: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        家居家装: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    环球美食: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        乳品饮料: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        咖啡冲饮: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        饼干糕点: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        休闲零食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        茶叶酒水: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        粮油副食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    考拉出品: {
        美容彩妆: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        数码家电: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        个人护洗: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        家居生活: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        环球美食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        服装鞋靴: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        运动户外: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        箱包配饰: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        母婴儿童: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    海外直购: {
        狂热销品类: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        逛直购自营店: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    网易严选: {
        家具生活: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        环球美食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        服装鞋包: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        数码家电: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        母婴用品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        美妆个护: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    海外商超: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        美容护肤: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        个护家具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        母婴专区: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    生鲜: {
        新鲜水果: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        肉品禽蛋: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        水产海鲜: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        冷饮冷藏: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        蔬菜特产: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    充值中心: {
        "APP Store": [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        视频会员: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        游戏点卡: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        话费充值: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
    宠物生活: {
        畅销星品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物主粮: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物零食: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        猫砂类产品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物医疗保健: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物美容护洗: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物日用品: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
        宠物玩具: [
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
            {
                imgUrl: "https://kaola-haitao.oss.kaolacdn.com/1c12pgcfs69_400_400.jpg?x-oss-process=image/resize,w_240,h_240/quality,q_75/format,webp/ignore-error,1",
                title: "嘉宝"
            },
        ],
    },
}

Mock.mock('/api/classify', 'get', function (config) {
    console.log(config);
    return datas
})