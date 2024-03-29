export default {
  pages: [
    'pages/index/index',
    'pages/topicStore/index',
    'pages/collectPage/index',
    'pages/goalPage/index',
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
        // 未点击时显示的图片
        iconPath: "pages/static/img/index.png",
        // 点击后显示的图片
        selectedIconPath: "pages/static/img/index_activite.png"
      },
      {
        pagePath: "pages/topicStore/index",
        text: process.env.TARO_ENV === 'h5' ? "题库":"",
        iconPath: "pages/static/img/topic.png",
        selectedIconPath: "pages/static/img/topic_activite.png"
      },
      {
        pagePath: "pages/collectPage/index",
        text: process.env.TARO_ENV === 'h5' ? "收藏":"",
        iconPath: "pages/static/img/sc.png",
        selectedIconPath: "pages/static/img/sc_activite.png"
      },

      {
        pagePath: "pages/goalPage/index",
        text: process.env.TARO_ENV === 'h5' ? "目标":"",
        iconPath: "pages/static/img/tag.png",
        selectedIconPath: "pages/static/img/tag_activite.png"
      },
      {
        pagePath: "pages/myPage/index",
        text: process.env.TARO_ENV === 'h5' ? "关于":"",
        iconPath: "pages/static/img/my.png",
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
