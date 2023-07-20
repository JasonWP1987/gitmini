// index.js
Page({
  data: {
    count:0,
    msg:'hi,',
    type:1,
    flag:true,
    arr1:['苹果','橘子','菠萝'],
    userList:[
      {id:1, name:'小红'},
      {id:2, name:'小黄'},
      {id:3, name:'小黑'}
    ],
    username:'xh',
    country:'CHINA'
  },
inputHandler(e){
  this.setData({
    msg: e.detail.value,
    
  })
},
getInfo(){
  wx.request({
    url: 'https://applet-base-api-t.itheima.net/api/get',
    method:'GET',
    data:{
      name:'zs',
      age:20
    },
    success:(res)=>{
      console.log(res)
    }
  })
},
// 发起POST请求
postInfo(){
  wx.request({
    url:'https://applet-base-api-t.itheima.net/api/post',
    method:'POST',
    data:{
      name:'ls',
      age:33
    },
    success:(res) => {
      console.log(res)
    }
  })
},
gotoLog(){
  wx.navigateTo({
    url: '/pages/logs/logs?name=xiaohong&gender=nv',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getInfo()
    // this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到达底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})