// pages/aboutus/aboutus.js

var postDatas = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  usDetails: function(event) {
    var id = event.currentTarget.dataset.myid;
    wx.navigateTo({
      url: '../aboutus/usdetails/usdetails?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.playBackgroundAudio({
      dataUrl: 'http://static.gangguwang.com/file/2018/7/12/18/20/5b472b6410f4e80009001fe7.mp3', //封面图片地址和音乐文件地址必须为网络地址
      title: '菩提偈-刘惜君', //标题
      coverImgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2360247711,4078302989&fm=179&app=42&f=JPEG?w=120&h=119' //封面URL
    });
    this.setData({
      post_container: postDatas.postlist
    })
  }
})