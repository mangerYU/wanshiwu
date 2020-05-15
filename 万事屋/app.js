//app.js
App({
  onLaunch: function () {
    var that=this
    // // 展示本地存储能力
    // var user = wx.getStorageSync('user') || {};
    // var userInfo = wx.getStorageSync('userInfo') || {};

    // 登录
    wx.login({
      success: res => {

     
  }
})

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          wx.switchTab({
            url: '/pages/index/index',
          });
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
             
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.switchTab({
            url: '/pages/open/open',
          });

         
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    unionid:null
    
  },

})