//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "../../image/index/banner1.jpg",
      "../../image/index/banner2.jpg",
      "../../image/index/banner3.jpg"


    ],
    imglist: [
      "../../image/index/r1.jpg",
      "../../image/index/r2.jpg"

    ],
    imagefoot: [
      "../../image/index/c1.jpg",
      "../../image/index/c2.jpg",
      "../../image/index/c3.jpg"

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 800,
    img: 'image/icon_API.png'
  }, 

  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  },
  details: function() {
    let imglist=this.data.imglist;
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },
  seek:function(){
wx.navigateTo({
  url: '/pages/seek/seek'
})

  }

})  