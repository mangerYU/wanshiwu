// pages/addsite/addsite.js
Page({

  data: {
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    flag:true,
    flag2:true,
    userName:"",
    phone:"",
    address:""
  },
  onLoad:function(options){
var id=options.id;
console.log("id:"+id);
  },
  nameinput:function(e){
    let name=e.detail.value;
    console.log(name+"1");
    if(name.length<=1){
    
      this.setData({ flag: false })
    }else{
      this.setData({ flag: true })
    }
  }, phoneinput: function (e) {
    let phone = e.detail.value;
    console.log(phone + "1");
    if (phone.length <= 10||phone.length>=12) {

      this.setData({ flag2: false })
    } else {
      this.setData({ flag2: true })
    }
  },address:function(e){
let address=e.detail.value;
    console.log(address + "adderess");
    this.data.address=address;
  },
   button:function(e){
        let flag=this.data.flag;
        let flag2=this.data.flag2;
        let address=this.data.address;
    console.log(flag + "flag"+flag2);
    console.log(address);
    if (flag==false||flag2==false){

      wx.showToast({
        title: '填写不正确',
        icon:'none'
      })
     
    } else if (address.length <= 4) {
      wx.showToast({
        title: '填写正确详细地址',
        icon: 'none'
      })

    }else{
      wx.showToast({
        title: '保存成功',
        icon:'success',
        duration:40000
      }),
     wx.navigateBack({
       
     })
   }
    
  }
})