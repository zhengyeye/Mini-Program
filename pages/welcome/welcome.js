// pages/welcome/welcome.js

//添加背景音乐
// const backgroundAudioManager = wx.getBackgroundAudioManager()

// backgroundAudioManager.title = '刚好遇见你'
// backgroundAudioManager.epname = '祝子博哥生日快乐♡'
// backgroundAudioManager.coverImgUrl = 'http://static.gangguwang.com/image/2018/7/7/18/2/5b408fa410f4e80009001079.jpg'
// backgroundAudioManager.src = 'http://static.gangguwang.com/file/2018/7/7/18/3/5b408ffa10f4e8000900107a.mp3' // 设置了 src 之后会自动播放

Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    setTimeout(function(){
      wx.switchTab({
        url: '../index/index'
      })
    }, 5000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
  
})