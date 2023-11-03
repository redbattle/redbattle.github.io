module.exports = {
  title: 'Redbattle',
  description: '知识管理',
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: '踩坑', link: '/fix/' },
      { text: '环境', link: '/env/' },
      { text: '项目', link: '/project/' },
      { text: '配置', link: '/setting/' },
      { text: '知识点', link: '/knowledge/' },
    ],
    sidebar: 'structuring',
    nextLinks: false, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    prevLinks: false,  // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
  }
}