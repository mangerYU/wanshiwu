// pages/seek/seekcomm/seekcomm.js
Page({
  data: {
    navbar: ['销量', '最新', '价格', '筛选'],
    currentTab: 0,
list:{}
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.search;
    console.log("name:"+name);
    let that=this;
    wx.request({
      url: 'http://192.168.1.158:8080/mall_applet/commodityShow/getCommodityByName',
      data: { "commodityName": name },
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.list);
        that.setData({
          list: res.data.list
        })
      }
    });
  },
  
  details: function () {
    console.log("list11:" + JSON.stringify(this.data.list));
    var list2 =this.data.list;
    for (var i in list2) {
      console.log("qwueioqw" + JSON.stringify(list2[i].commodity_name));
      var listData = JSON.stringify(list2[i]);
      console.log("String:" + listData);
      wx.navigateTo({
        url: '/pages/details/details?list=' + listData
      })
    }
    
 
  }

})