// pages/abouthim/abouthim.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 点击图片监听函数
   */
  bigimgsrc: function(event) {
    console.log(event);
    var src = event.currentTarget.dataset.mysrc;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [// 需要预览的图片http链接列表
        'http://static.gangguwang.com/image/2018/7/7/17/38/5b408a1010f4e80009001074.jpg',                          
        'http://static.gangguwang.com/image/2018/7/7/17/35/5b40897610f4e80009001070.jpg',
        'http://static.gangguwang.com/image/2018/7/7/17/36/5b40899010f4e80009001072.jpg'
      ] 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})