// pages/comments/comments.js
// var commentsDataStorage = wx.getStorageSync('commentslist');//获取缓存
// console.log(commentsDataStorage);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:'',//input的 value值
    commentsData: wx.getStorageSync('commentslist') ? wx.getStorageSync('commentslist'):[]  //留言数据
  },

  //获取input框的值
  getValue:function(event){
    var val = event.detail.value;
    this.setData({
      inputVal: val
    })
  },
  addcomments:function(){//button点击事件
    var list = this.data.commentsData;
    var inputVal = this.data.inputVal;
    if (!inputVal){//input框为空值
      wx.showToast({
        title: '请输入留言内容~',
        icon:'none',
        duration: 3000
      })
      return;
    }
    list.push({ msg: this.data.inputVal});
    console.log(list);

    wx.setStorageSync('commentslist', list);
    //更新
    this.setData({
      commentsData: list,
      inputVal:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})