// pages/abouthim/abouthim.js
//获取应用实例
const app = getApp()


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
    var src = event.currentTarget.dataset.mysrc;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [// 需要预览的图片http链接列表
        'http://static.gangguwang.com/image/2018/7/7/17/38/5b408a1010f4e80009001074.jpg',                          
        'http://static.gangguwang.com/image/2018/7/7/17/35/5b40897610f4e80009001070.jpg',
        'http://static.gangguwang.com/image/2018/7/7/17/36/5b40899010f4e80009001072.jpg',
        'http://static.gangguwang.com/image/2018/7/16/10/4/5b4bfd1410f4e80009002525.jpg'
      ] 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('***************he  onload');
    console.log(app.globalData.isplaymusic);
    var that =this;
    // if (app.globalData.isplaymusic) { 
    //   wx.pauseBackgroundAudio();
    //   that.setState({
    //     isplaymusic:false
    //   });
    // }

    // wx.playBackgroundAudio({
    //   dataUrl: 'http://static.gangguwang.com/file/2018/7/12/18/19/5b472b2a10f4e80009001fe6.mp3',//封面图片地址和音乐文件地址必须为网络地址
    //   title: '独孤-金沙',//标题
    //   coverImgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2360247711,4078302989&fm=179&app=42&f=JPEG?w=120&h=119'//封面URL
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('***************he  onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('***************he  onShow');
    // var index = 0;
    // var musiclist = [
    //   {
    //     dataUrl: 'http://static.gangguwang.com/file/2018/7/12/18/19/5b472b2a10f4e80009001fe6.mp3',//封面图片地址和音乐文件地址必须为网络地址
    //     title: '独孤-金沙',//标题
    //     coverImgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2360247711,4078302989&fm=179&app=42&f=JPEG?w=120&h=119'//封面URL
    //   },
    //   {
    //     dataUrl: 'http://static.gangguwang.com/file/2018/7/7/18/3/5b408ffa10f4e8000900107a.mp3',//封面图片地址和音乐文件地址必须为网络地址
    //     title: '刚好遇见你',//标题
    //     coverImgUrl: 'http://static.gangguwang.com/image/2018/7/7/18/2/5b408fa410f4e80009001079.jpg'//封面URL
    //   },
    //   {
    //     dataUrl: 'http://static.gangguwang.com/file/2018/7/12/18/20/5b472b6410f4e80009001fe7.mp3',//封面图片地址和音乐文件地址必须为网络地址
    //     title: '菩提偈-刘惜君',//标题
    //     coverImgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2360247711,4078302989&fm=179&app=42&f=JPEG?w=120&h=119'//封面URL
    //   }
    // ];
    wx.playBackgroundAudio({
      dataUrl: 'http://static.gangguwang.com/file/2018/7/12/18/19/5b472b2a10f4e80009001fe6.mp3',//封面图片地址和音乐文件地址必须为网络地址
      title: '独孤-金沙',//标题
      coverImgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2360247711,4078302989&fm=179&app=42&f=JPEG?w=120&h=119'//封面URL
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('***************he  onHide');
    wx.pauseBackgroundAudio();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('***************he  onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('***************he  onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('***************he  onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('***************he  onShareAppMessage');
  }
})