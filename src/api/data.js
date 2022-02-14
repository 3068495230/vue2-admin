// 引入 mock.js
const Mock = require("mockjs");
// 拿到随机函数
const Random = Mock.Random;

// 生成随机手机号
const phonePrefix = ["132", "135", "189"];
const index = Math.floor(Math.random() * phonePrefix.length);
var phone = phonePrefix[index] + Mock.mock(/\d{8}/);

// 导出数据,最后导出的数据必须是 json 格式
module.exports = function () {
  let data = {
    // 数据列表
    list: [],
    // 用户数据
    user: [],
  };
  // 生成数据列表
  for (let i = 0; i < 100; i++) {
    data.list.push({
      id: i,
      // 姓名
      name: Random.cname(),
      // 年龄
      age: Random.integer(1, 120),
      // 性别
      sex: Random.string("男女", 1),
      // 索引
      i: i,
    });
  }
  // 生成 user 数据
  for (let i = 0; i < 100; i++) {
    // 生成随机浅色背景颜色
    let ImgBackground = null;
    for (let i = 0; i < 16; i++) {
      ImgBackground =
        "#" +
        Random.integer(110, 170).toString(16) +
        Random.integer(200, 255).toString(16) +
        Random.integer(200, 220).toString(16);
    }
    data.user.push({
      // 人员表
      // id
      id: i,
      // 年龄
      age: Random.integer(1, 120),
      // 随机名字
      name: Random.cname(),
      // 性别
      sex: Random.string("男女", 1),
      // 手机号码
      phone: phone,
      // 邮箱
      email: Random.email("qq.com"),
      // 住址
      city: Random.city(true),
      // 注册日期：生成随机日期与随机时间
      date: Random.date("yyyy--mm-dd"),
      // 头像
      avatar: Random.image("400x400", ImgBackground, "png", "achens"),
    });
  }
  return data;
};
