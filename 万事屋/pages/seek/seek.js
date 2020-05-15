// pages/seek/seek.js
Page({

  data: {
    flags:false,
    flag:true,
    seek: [],
    hot: ['炫出彩', '工装男', 
      '外套女春秋', '卫衣女',
      '很仙的法国小众连衣裙', '学生口红满天星',
      '耐克运动套装男三件套', '体重称家用精准',
      '法式小众夹克两件套', '学生增高雪糕鞋', ],
    searchs:[],
    search:""
  },
  //隐藏热门
  eye:function(){
    if(this.data.flags==false){

      this.setData({ flags: true });
    }else{
      this.setData({ flags: false });
    }

  },
  //搜索图标
  hunts:function() {
    console.log("search111:" + this.data.search);
    if (this.data.search != '') {
      wx.navigateTo({
        url: '/pages/seek/seekcomm/seekcomm?search=' + this.data.search
      })
      var searchs = this.data.searchs;
      //将搜索记录更新到缓存 
      searchs.push({
        id: searchs.length,
        name: this.data.search
      })
      wx.setStorageSync('searchs', searchs);
    }
  },
  //隐藏下拉列表
  hide:function(){
this.setData({flag:true})
  },
  //清空历史搜索
  empty:function(){
      wx.clearStorageSync('searchs')
      this.setData({
        search: []
      })

  },
  //隐藏的下拉列表
  enter:function(e){
    console.log("e" + e.currentTarget.dataset.text);
    var e = e.currentTarget.dataset.text;
    this.setData({
       flag: false,
      search:e
       });
    wx.navigateTo({
      url: '/pages/seek/seekcomm/seekcomm?search=' + this.data.search
    })
    var searchs = this.data.searchs;
    //将搜索记录更新到缓存 
    searchs.push({
      id: searchs.length,
      name: e
    })
    wx.setStorageSync('searchs', searchs);
  },
  //打开历史记录列表
  onLoad: function () {
    console.log(wx.getStorageSync('searchs'));
    this.setData({
      searchs: wx.getStorageSync('searchs')  
    })
  },

  //搜索框
  search:function(e){
    let search = e.detail.value;
    console.log("search:" + search);
   this.setData({
     search:search
   })  

    var self = this;
    if (search.length == 0||search.length=='') {
      this.setData({
        flag: true
      })
    } else if(search.length != 0 || search.length != ''){
      this.setData({
        flag: false
      });
      wx.request({
        url: 'http://192.168.1.158:8080/mall_applet/commodityShow/getCommodityByName',
        data: { "commodityName": search},
        method: 'GET',
        header: {
          'Content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data.list);
          self.setData({
            seek: res.data.list
          })
        }
      });
    }
 
  },
 //控制搜索历史//将搜索记录更新到缓存 
historys:function(){
  if(this.data.search!= '') {
    console.log("self.data.search " + this.data.search);
    var search1 = this.data.seek;  
  search1.push({
    id: search1.length,
    name: this.data.searchs
  })
  wx.setStorageSync('searchs', search1);
}
},

//点击历史搜索中的记录
onsearch:function(e){
  var history = e.currentTarget.dataset.text;
  console.log("history:" + history);
  this.setData({
    search: history
  })
  wx.navigateTo({
    url: '/pages/seek/seekcomm/seekcomm?search=' + history
  })
},
  
})