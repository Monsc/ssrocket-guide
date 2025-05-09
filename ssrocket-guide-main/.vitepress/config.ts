
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SSRocket 使用指南',
  description: '图文教程、软件下载与常见问题指南 - SSRocket',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'SSR, SSRocket, Shadowrocket, 科学上网, iOS翻墙, 安卓代理' }],
    ['meta', { name: 'author', content: 'SSRocket Team' }],
    ['meta', { name: 'theme-color', content: '#1e90ff' }]
  ],
  themeConfig: {
    nav: [
      { text: '下载中心', link: '/download' },
      { text: 'iOS 教程', link: '/ios' },
      { text: 'Android 教程', link: '/android' },
      { text: '常见问题', link: '/faq' },
      { text: '联系我们', link: '/contact' },
    ],
    sidebar: [
      { text: '指南首页', link: '/' },
      { text: '下载中心', link: '/download' },
      { text: 'iOS 教程', link: '/ios' },
      { text: 'Android 教程', link: '/android' },
      { text: '常见问题', link: '/faq' },
      { text: '联系我们', link: '/contact' },
    ]
  }
})
