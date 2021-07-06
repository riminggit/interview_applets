export default {
  pages: [
    'pages/index/index',
    'pages/myPage/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    borderStyle: process.env.TARO_ENV === 'h5' ? 'white' : 'black',
    list: [
      {
        pagePath: "pages/index/index",
        text: process.env.TARO_ENV === 'h5' ? "首页":"",
        // // 未点击时显示的图片
        iconPath: "pages/static/img/index.png",
        // // 点击后显示的图片
        selectedIconPath: "pages/static/img/index_activite.png"
      },
      {
        pagePath: "pages/index/index",
        text: process.env.TARO_ENV === 'h5' ? "题库":"",
        // // 未点击时显示的图片
        iconPath: "pages/static/img/topic.png",
        // // 点击后显示的图片
        selectedIconPath: "pages/static/img/topic_activite.png"
      },
      {
        pagePath: "pages/index/index",
        text: process.env.TARO_ENV === 'h5' ? "收藏":"",
        // // 未点击时显示的图片
        iconPath: "pages/static/img/sc.png",
        // // 点击后显示的图片
        selectedIconPath: "pages/static/img/sc_activite.png"
      },

      {
        pagePath: "pages/index/index",
        text: process.env.TARO_ENV === 'h5' ? "目标":"",
        // // 未点击时显示的图片
        iconPath: "pages/static/img/tag.png",
        // // 点击后显示的图片
        selectedIconPath: "pages/static/img/tag_activite.png"
      },
      {
        pagePath: "pages/myPage/index",
        text: process.env.TARO_ENV === 'h5' ? "我的":"",
        iconPath: "pages/static/img/my.png",
        // // 点击后显示的图片
        selectedIconPath: "pages/static/img/my_activite.png"
      }
    ]
  },
  // subPackages:[
  //   {
  //     root: "pages/myPage",
  //     pages: [
  //       "index",
  //     ]
  //   }
  // ]
}
