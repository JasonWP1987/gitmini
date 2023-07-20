// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    query:{}
  },
  // 编程式导航
  gotoXiaohong(){
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  goBack(){
    wx.navigateBack({
      delta:2
    })
  },
  onLoad:function (option) {
    console.log('pram transferred',option)
    this.setData({
      query:option
    })
  }
})
