// pages/my/my.js
const app = getApp()
Page({

  data: {
    grade:"../../image/my/grade.png",
  id:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('open-type.getUserInfo'),
    int:0
  
  }, onShow: function () {
    console.log("++" + app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

to1:function(e){
  let ids = e.currentTarget.dataset.id;
console.log("ids"+ids);
  this.data.id=ids;
  console.log("id" + this.data.id);
wx.navigateTo({
  url: './myorder/myorder?id=' + this.data.id
})
  },
   signin:function(){
    let int=this.data.int;
  let integral=0;

  if(int!=integral){
    wx.showToast({
      title: '已签到',
      icon: 'none'
    })
  }else{
      wx.showToast({
      title: '签到成功'

    })
    integral=integral+1;
  this.setData({
    int:integral
  })
  }
  
  
  }


})