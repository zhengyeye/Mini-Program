//index.js
//获取应用实例
const app = getApp()

//引入百度地图
var bmap = require('../../libs/bmap-wx/bmap-wx.min.js');
var wxMarkerData = []; //定位成功回调对象 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ak: "1MetaiXkO205HMqeZMs6zPlTHREXoaCM", //百度地图的ak  
    markers: [],
    address: '', //地址  
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imgUrls: [
      'http://static.gangguwang.com/image/2018/7/16/17/36/5b4c670610f4e8000900277e.jpg',
      // 'http://static.gangguwang.com/image/2018/7/8/13/20/5b419f0210f4e8000900109a.jpg',
      // 'http://static.gangguwang.com/image/2018/7/8/13/46/5b41a54c10f4e800090010a2.jpg',
      // 'http://static.gangguwang.com/image/2018/7/8/13/43/5b41a49210f4e800090010a0.png'
    ],
    indicatorDots: false, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 4000, //自动切换时间间隔
    duration: 500 //滑动动画时长
  },

  comments :function (event) {
    console.log('comment page');
    wx.navigateTo({
      url: '../comments/comments'
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.playBackgroundAudio({
      dataUrl: 'http://static.gangguwang.com/file/2018/7/7/18/3/5b408ffa10f4e8000900107a.mp3',//封面图片地址和音乐文件地址必须为网络地址
      title: '刚好遇见你',//标题
      coverImgUrl: 'http://static.gangguwang.com/image/2018/7/7/18/2/5b408fa410f4e80009001079.jpg'//封面URL
    });
    var that = this;
    /* 获取定位地理位置 */
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function(data) {
      console.log(data);
    };
    var success = function(data) {
      //返回数据内，已经包含经纬度  
      //使用wxMarkerData获取数据  
      wxMarkerData = data.wxMarkerData;
      //把所有数据放在初始化data内  
      that.setData({
        address: wxMarkerData[0].address
      });
    }
    // 发起regeocoding检索请求   
    BMap.regeocoding({
      fail: fail,
      success: success
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onShow:function(){
    
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})