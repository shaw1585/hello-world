//index.js
//获取应用实例
import utils from '../../utils/index'
var app = getApp()

Page({
  data: {
  },

  onLoad(options) {
    wx.BaaS.login().then(() => {
      this.setData({
        profile: wx.BaaS.storage.get('userinfo')
      })
    })
  },

  submit() {
    console.log('here')
  }
})