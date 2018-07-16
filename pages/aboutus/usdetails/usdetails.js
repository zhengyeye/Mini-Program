var postDatas = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
 * 点击图片监听函数
 */
  bigimgsrc: function (event) {
    var src = event.currentTarget.dataset.mysrc;//当前点击图片的src
    var imglist = event.currentTarget.dataset.imglist.split(",");//图片列表集合
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imglist// 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var postData = postDatas.postlist[id];
    this.setData({
      postData: postData
    })
  }
})