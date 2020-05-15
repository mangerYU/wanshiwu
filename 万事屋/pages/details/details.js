// pages/details/details.js
Page({
  data: {
    imgUrls: [
      // "../../image/part/1.jpg",
      // "../../image/part/2.jpg",
      // "../../image/part/3.jpg",
      // "../../image/part/4.jpg"

    ],
    flag: true,
    flag2:true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 800,
    list:[]
   
  }, 
  attached() { },
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
  onLoad:function(options){
    var id=options.id;
    console.log("4444:" +id);
    // this.setData({
    //   list:lists,
    //   imgUrls: lists.commodity_picturesite
    // })

  },
  orders:function(){
    let spName = this.data.spName;
    let type=this.data.type;
    let price =this.data.price;
    let num =this.data.num;
    console.log("商品名" +spName + "规格" + type + "价格" +price + "数量" + num);
wx:wx.navigateTo({
  url: '/pages/orders/orders?spName='+spName+"&type="+type+"&price="+price+"&num="+num,
})

  }, show: function () {
    this.setData({ flag: false })
  },
   show2: function () {
     
    this.setData({ flag2: false })
  },
hide:function(){
  this.setData({ flag: true })
  this.setData({ flag2: true })
},
  cart: function (e) {
    console.log("商品名" + this.data.spName + "规格" + this.data.type + "价格" + this.data.price + "数量" + this.data.num);
    this.setData({ flag: true }),
      wx.showToast({
        title: '加入购物车',
        duration:1000
      })

  }, 
  // orders: function () {

  //  wx.navigateTo({
  //    url: '/pages/orders/orders',
  //  })

  // },
  /**
 * 绑定减数量事件
 */
  btn_minus(e) {
    //   // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    let num = this.data.num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
  this.data.num=num;
 
    // 渲染页面
    this.setData({
      num:num
    });

  },

  btn_add(e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
   let num=this.data.num;
    num = num + 1;
    this.data.num = num;
    this.setData({
      num: num
    });   
    
  },
  toindex:function(){
    wx.switchTab({
      url: '/pages/index/index',
    })
 
  }, tocar:function(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  }
 
})