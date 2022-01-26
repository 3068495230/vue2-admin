#!/usr/bin/env node

// 拿到 Command 对象
const { program } = require("commander");

// 默认信息
program
  // 定义帮助信息的首行提示
  .name("achens")
  .usage("[name] node")
  // 版本号设置；commander 内部已经自动写好 -V 和 -h 指令。
  // 我们不需要定义只需要直接输入 -V、-h 或 --version、--help。
  // 就可以直接获取到版本号、命令帮助。
  .version("0.1.0")
  // 配置指令选项，且选项名称大小写敏感
  // .option("-指令简写名, 指令全名 传入参数", "指令作用", "指令参数示例")
  .option("-c, --config <path>", "set config path", "./deploy.conf");

// init 命令
program
  // 定义命令：.command(命令名，[参数])
  // []：表示可选参数
  // <>：表示必填参数
  .command("init <templateName> <projectName>")
  // 命令别名
  .alias("i")
  // 命令作用介绍
  .description("初始化项目模板")
  // 可接在此命令之后连用的指令
  .option("-i, --init <name>", "命令后使用选项接参数示例", "normal")
  // 命令执行回调
  .action((templateName, projectName, options) => {
    // templateName：传给本项命令的参数
    // projectName：传给本项命令的第二个参数
    // options.***：传给命令之后使用的指令的参数（option.init）
    console.log(
      `使用的模板为：${templateName}, 项目名称为：${projectName}, ${
        options.init === "normal" ? "" : `选项参数为：${options.init}`
      }`
    );
  });

// 存储模板地址
const templates = {
  "Webpack-vue2": {
    url: "https://gitee.com/qingchen666/S-cli/tree/Webpack-vue2/",
    description: "Webpack5 + Vue2 模板",
  },
  "Webpack-vue3": {
    url: "https://gitee.com/qingchen666/S-cli/tree/Webpack-vue3/",
    description: "Webpack5 + Vue3 模板",
  },
  "Vite-vue2": {
    url: "https://gitee.com/qingchen666/S-cli/tree/Vite-vue2/",
    description: "Vite + Vue2 模板",
  },
  "Vite-vue3": {
    url: "https://gitee.com/qingchen666/S-cli/tree/Vite-vue3/",
    description: "Vite + Vue3 模板",
  },
  "vue2-admin": {
    url: "https://gitee.com/qingchen666/vue-blog-admin/tree/template/",
    description: "Webpack5 + Vue2 + element.ui 后台模板",
  },
};

// list 命令
program
  .command("list")
  .description("查看所有可用模板")
  .action(() => {
    // 遍历已有模板
    for (let k in templates) {
      console.log(`模板名称：${k}`);
      console.log(`模板 URL：${templates[k].url}`);
      console.log(`模板介绍：${templates[k].description}`);
      console.log("-------------------------------------");
    }
  });

// 捕获没有定义的命令
program.command("* [asg] [asf]").action(function (asg, asf) {
  console.log(
    `命令不存在：${asg}；`,
    asf == undefined ? "" : `无效参数：${asf}；`
  );
});

// 解析命令行参数
program.parse(process.argv);
