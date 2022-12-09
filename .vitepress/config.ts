import { defineConfig } from "vitepress";

export default defineConfig({
  title: "vuEPG",
  titleTemplate: "vuEPG 文档",
  description: "Vue plugin for TV webview.",
  base: "/vuepg/",
  lang: "zh-CN",
  themeConfig: {
    siteTitle: "vuEPG",
    nav: [
      {
        text: "指引",
        link: "/guide/introduction",
        activeMatch: "/guide/",
      },
      // { text: "Configs", link: "/configs" },
      // { text: "Changelog", link: "https://github.com/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指引",
          collapsible: true,
          items: [
            { text: "什么是vuEPG", link: "/guide/introduction" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "vue-epg 差异", link: "/guide/difference" },
          ],
        },
        {
          text: "使用",
          collapsible: true,
          items: [
            { text: "配置EPG", link: "/guide/configuration" },
            { text: "按键事件", link: "/guide/key-action" },
            { text: "返回回调", link: "/guide/back-callback" },
            { text: "EPGItem", link: "/guide/epg-item" },
            { text: "EPGGroup", link: "/guide/epg-group" },
            { text: "移动规则", link: "/guide/move-rule" },
            { text: "API", link: "/guide/api" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/LemoFire/vuEPG" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present LemoFire",
    },
    editLink: {
      pattern: "https://github.com/LemoFire/vuEpg-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdatedText: "最后更新",
  },
  lastUpdated: true,
  outDir: "./dist",
  srcDir: "./src",
});
