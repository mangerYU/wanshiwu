
Page({
  data: {
    flag:true,
    navbar: [],
    currentTab: 0,
    cateItems: [],
    curNav: 1,
    curIndex: 0,
    id:''
  }, navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
onLoad:function(){
  var that=this
wx.request({
  url: 'http://192.168.1.158:8080/mall_applet/commodityShow/selectCategoryAll',
  data:{},
  header: {
    'content-type': 'application/json' // 默认值
  },
  success(res){
    console.log("data:" +JSON.stringify(res.data.list));
    that.setData({
      cateItems:res.data.list
      });

    wx.request({
      url: 'http://192.168.1.158:8080/mall_applet/commodityShow/selectCategoryAllTwo',
      data: { pid: that.data.curNav},
      success: function (res) {
        console.log("res2:" + JSON.stringify(res.data.list));
        that.setData({
          flag: false,
          curIndex: that.data.curIndex,
          curNav: that.data.curNav,
          navbar: res.data.list
        })
      }
    })

  }
})

},
  seek: function () {
    wx.navigateTo({
      url: '/pages/seek/seek'
    })

  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id;
    console.log("id:"+id);
    
     let index = e.target.dataset.index;
    console.log("index:" + index);
    // 把点击到的某一项，设为当前index  
    var that=this;
    wx.request({
      url: 'http://192.168.1.158:8080/mall_applet/commodityShow/selectCategoryAllTwo',
      data:{pid:id},
      success:function(res){
console.log("res2:"+JSON.stringify(res.data.list));
that.setData({
  flag:false,
  curIndex:index,
  curNav:id,
  navbar:res.data.list
})
      }
    })
  },
  oncomm:function(){
wx.navigateTo({
  url: '/pages/seek/seekcomm/seekcomm',
})

  },
})