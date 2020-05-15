// pages/my/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLeftScroll: true,
    index:0,
    fakeDatas: [
      {
        id:0,
        name: '张三',
        phone:123456789,
        address:'河南郑州郑东新区升龙广场AAAAA',
        selected: true
      },
      {
        id:1,
        name: '李四',
        phone: 123456789,
        address: '河南郑州郑东新区升龙广场AAAAA',
        selected: false
      },
    ]
  },
  modify: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.showToast({
      title: '修改成功' +index,
    })
    wx.navigateTo({
      url: '/pages/addsite/addsite?id=' + index
    })
  },
  del: function () {
 console.log(this.data.fakeDatas.id);
    wx.showModal({
      title: '提示',
      content: '确定要删除这条信息？',
      success: function (res) {
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  }, 
  onLoad:function(){
    var sele = this.data.fakeDatas.selected;
    if(sele==true){
      console.log(this.data.fakeDatas.name);
    }
  },
  radio: function (e) {
    this.setData({
      index: e.detail.value
    })
    
    console.log(e.detail.value);
  },
  button:function(){
    var addid=this.data.index;
    console.log("addid:"+addid);
    wx.switchTab({
      url: '/pages/my/my',
    })

  },
})