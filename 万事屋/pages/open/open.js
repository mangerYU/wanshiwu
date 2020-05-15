var app=getApp();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,
    userInfo: {},
  },
 
  onLoad: function () {
      
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) { 
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              console.log(res.userInfo)
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          })
        }else{
          console.log("授权失败");
        }
      }
    })
  },
  bindGetUserInfo: function (event) {
    //使用
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.login({
            success: function (res) {
              var code = res.code;//登录凭证
              if (code) {
                //2、调用获取用户信息接口
                wx.getUserInfo({
                  success: function (res) {
                    console.log('getuserInfo');
                   console.log(res);
                    var encryptedData=res.encryptedData;
                    var iv = res.iv;
                    var encryptedData1 = encryptedData.replace(/\+/g, '%2B');                 
                    var iv1 = iv.replace(/\+/g, '%2B');                  
                    var code1 = code.replace(/\+/g, '%2B'); 
                    console.log({ encryptedData: encryptedData1, iv: iv1, code:code1})

                    wx.request({
                      url: 'http://192.168.1.158:8080/mall_applet/userlogin/getRandomByCode',//自己的服务接口地址
                      method: 'post',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      data: { code: code1},
                      success: function (data) { 
                              console.log("data1111"+JSON.stringify(data.data));
                        
                        if (data.data.status == 1) {  
                          var random = data.data.random;
                        // if(wx.getStorageSync('random')==''){
                        //           console.log("本地无random");
                        // }
                          wx.setStorageSync('random', random);  
                            
                          var random1 = wx.getStorageSync("random");
                          // wx.removeStorageSync("random"); 
                          console.log(random1);
                        wx.request({
                          url: 'http://192.168.1.158:8080/mall_applet/userlogin/getUserInfo?random=' + random1 + '&encryptedData=' + encryptedData1+'&iv='+iv1,
                          method: 'get',       
                          header: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},  
                          success:function(res){
                                console.log("res:"+JSON.stringify(res.data));
                            if (res.data.status!=0) { 
                                  wx.switchTab({
                                 url: '/pages/index/index',
                              });
                            }
                          } 
                        });

                        } else {
                          console.log('解密失败')
                       
                        }

                      },
                      fail: function () {
                        console.log('系统错误')
                      }
                    })




                  },
                  fail: function () {
                    console.log('获取用户信息失败')
                  }
                })

              } else {
                console.log('获取用户登录态失败！' + r.errMsg)
              }
            },
            fail: function () {
              console.log('登陆失败')
            }
          })

        } else {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getSetting();
            }
          })
          console.log('获取用户信息失败')

        }

      }
    })
  },
  onShow: function () {
    wx.checkSession({
      // success: function () {
      //   //session_key 未过期，并且在本生命周期一直有效
      //   console.log("登录未过期");
      //   return;
      // },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        console.log("登录失效");
      }
    })

  },
})
