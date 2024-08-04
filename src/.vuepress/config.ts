import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "个人知识库", // 你的站点描述
  description: "",
  theme: hopeTheme({
    logo: "/cjc.jpg",
    repo: "https://github.com/cjcniubi666", //你的Gihub
    docsRepo: "https://github.com/CJCniubi666/cjcniubi666.github.io", //你的源
    fullscreen: true,
    hotReload: true,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"],
    },
    // 此处放置主题配置
    sidebar: "structure",
    sidebarSorter: ['readme','order','date-desc','title'],
    plugins: {
      comment: {    // giscus配置
        provider: "",
        repo: "",
        repoId: "",
        category: "",
        categoryId: ""
      },
    },
    // encrypt: {
    //   global: true,
    //   admin: "全局加密的密码"
    // }
  }),
  plugins: [
    searchProPlugin({
      indexContent: true,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});

// .vuepress/config.js
module.exports = {

  // other options...
  plugins: [
    [
      'posts-encrypt',
      {
        route: '/auth',
        passwd: 'cjc134768075',
        encryptInDev: true,
        expires: 1000  * 60
      }
    ]
}