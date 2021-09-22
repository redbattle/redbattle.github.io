module.exports = {
  title: 'Redbattle',
  description: 'Just playing around',
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '开发', link: '/dev/' },
      {
        text: 'fix',
        items: [
          { text: 'Chinese', link: '/chinese' },
          { text: 'Japanese', link: '/japanese' }
        ]
      },
    ],
    sidebar: 'structuring'
  }
}