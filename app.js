//app.js
App({
  onLaunch: function() {
    let that = this

    // 引入 BaaS SDK
    require('./utils/sdk-v1.1.0')

  
    let clientId = this.globalData.clientId

    wx.BaaS.init(clientId)
  },

  globalData: {
    clientId: '9e44b52e3f68c3ab2a80', // 从 BaaS 后台获取 ClientID
    tableId: '23161', // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
})
