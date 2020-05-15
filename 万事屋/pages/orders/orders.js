// pages/orders/orders.js
Page({
  data: {
    flags: true,
    flag: true,
    flag1: true,
    flag2:true,
    userName:"",
    cardId:"",
    border:"lightgreen",
    border1: "lightgreen",
    spName:'',
    price:'',
    type: '',
    num:'',
    monney:''
  }, 
  addsite:function(){
wx.navigateTo({
  url: '/pages/addsite/addsite'
})
  }, userName: function (e) {
    let userName = e.detail.value;
    this.data.userName=userName;
    if (userName.length <= 1) {
      this.setData({ border: "red" });
    } else {
      this.setData({ border: "lightgreen" });
    }
  },
    
  cardId:function(e){
    let cardId = e.detail.value;
    this.data.cardId = cardId;
    if (cardId.length!=18) {
      this.setData({ border1: "red" });
    } else {
      this.setData({ border1: "lightgreen" });
    }
  },close:function(){
this.setData({flags:true})
  },
  //显示
  show: function () {
    this.setData({ flags: false })
    this.setData({ flag1: false })
    this.setData({ flag2: false })
  },
  //确定
  hide: function (e) { 

    if (this.data.userName.length <= 1 || this.data.cardId.length != 18 ){
      wx.showToast({
        title: '填写不完整',
        icon: 'none'
      })

    }else{
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      })
      this.setData({ flags: true })
    }
   

  },onLoad:function(orders){
var monney=orders.num*orders.price;
    this.setData({
     spName:orders.spName,
      price: orders.price,
     type:orders.type,
     num:orders.num,
     monney:monney
    })
    
   
    console.log("商品名1" + this.data.spName + "规格1" + this.data.type + "价格" + this.data.price + "数量" + this.data.num + "总金" + this.data.monney);

  }, pay: function () {
    // 调起支付
    // wx.requestPayment(
    //   {
    //     'timeStamp': '',
    //     'nonceStr': '',
    //     'package': '',
    //     'signType': 'MD5',
    //     'paySign': '',
    //     'success': function (res) { },
    //     'fail': function (res) { },
    //     'complete': function (res) { }
    //   })

    wx.showModal({
      title: '提示',
      content: '合计金额-' + this.data.monney + "元暂未开发",
    })

  }
  
})