//index.js
//获取应用实例
const app = getApp()

//引入百度地图
var bmap = require('../../libs/bmap-wx/bmap-wx.min.js');

var wxMarkerData = []; //定位成功回调对象 
var ctx = null;
var factor = {
  speed: .008,  // 运动速度，值越小越慢
  t: 0    //  贝塞尔函数系数
};


var timer = null;  // 循环定时器


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
    iszan: wx.getStorageSync('myzan')?true:false,  //是否點讚

    style_img: '',

    imgUrls: [
      'http://static.gangguwang.com/image/2018/7/30/17/3/5b5ed47910f4e80009004dcd.png',
      // 'http://static.gangguwang.com/image/2018/7/16/17/36/5b4c670610f4e8000900277e.jpg',
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

    ctx = wx.createCanvasContext('canvas_wi');

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

  onUnload: function () {
    if (timer != null) {
      // cancelAnimationFrame(timer);
      clearTimeout(timer);
    }

  },

  drawImage: function (data) {
    var that = this
    var p10 = data[0][0];   // 三阶贝塞尔曲线起点坐标值
    var p11 = data[0][1];   // 三阶贝塞尔曲线第一个控制点坐标值
    var p12 = data[0][2];   // 三阶贝塞尔曲线第二个控制点坐标值
    var p13 = data[0][3];   // 三阶贝塞尔曲线终点坐标值

    var p20 = data[1][0];
    var p21 = data[1][1];
    var p22 = data[1][2];
    var p23 = data[1][3];

    var p30 = data[2][0];
    var p31 = data[2][1];
    var p32 = data[2][2];
    var p33 = data[2][3];

    var t = factor.t;

    /*计算多项式系数 （下同）*/
    var cx1 = 3 * (p11.x - p10.x);
    var bx1 = 3 * (p12.x - p11.x) - cx1;
    var ax1 = p13.x - p10.x - cx1 - bx1;

    var cy1 = 3 * (p11.y - p10.y);
    var by1 = 3 * (p12.y - p11.y) - cy1;
    var ay1 = p13.y - p10.y - cy1 - by1;

    var xt1 = ax1 * (t * t * t) + bx1 * (t * t) + cx1 * t + p10.x;
    var yt1 = ay1 * (t * t * t) + by1 * (t * t) + cy1 * t + p10.y;

    /** ---------------------------------------- */
    var cx2 = 3 * (p21.x - p20.x);
    var bx2 = 3 * (p22.x - p21.x) - cx2;
    var ax2 = p23.x - p20.x - cx2 - bx2;

    var cy2 = 3 * (p21.y - p20.y);
    var by2 = 3 * (p22.y - p21.y) - cy2;
    var ay2 = p23.y - p20.y - cy2 - by2;

    var xt2 = ax2 * (t * t * t) + bx2 * (t * t) + cx2 * t + p20.x;
    var yt2 = ay2 * (t * t * t) + by2 * (t * t) + cy2 * t + p20.y;


    /** ---------------------------------------- */
    var cx3 = 3 * (p31.x - p30.x);
    var bx3 = 3 * (p32.x - p31.x) - cx3;
    var ax3 = p33.x - p30.x - cx3 - bx3;

    var cy3 = 3 * (p31.y - p30.y);
    var by3 = 3 * (p32.y - p31.y) - cy3;
    var ay3 = p33.y - p30.y - cy3 - by3;

    /*计算xt yt的值 */
    var xt3 = ax3 * (t * t * t) + bx3 * (t * t) + cx3 * t + p30.x;
    var yt3 = ay3 * (t * t * t) + by3 * (t * t) + cy3 * t + p30.y;
    factor.t += factor.speed;
    ctx.drawImage("/images/heart1.png", xt1, yt1, 30, 30);
    ctx.drawImage("/images/heart2.png", xt2, yt2, 30, 30);
    ctx.drawImage("/images/heart3.png", xt3, yt3, 30, 30);
    ctx.draw();
    if (factor.t > 1) {
      factor.t = 0;
      // cancelAnimationFrame(timer);
      clearTimeout(timer);
      that.startTimer();
    } else {
      // timer = requestAnimationFrame(function () {
      //   that.drawImage([[{ x: 30, y: 400 }, { x: 70, y: 300 }, { x: -50, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 30, y: 300 }, { x: 80, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 0, y: 90 }, { x: 80, y: 100 }, { x: 30, y: 0 }]])
      // })
      timer = setTimeout(function () {
        that.drawImage([[{ x: 30, y: 400 }, { x: 70, y: 300 }, { x: -50, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 30, y: 300 }, { x: 80, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 0, y: 90 }, { x: 80, y: 100 }, { x: 30, y: 0 }]])
      },70)
    }
  },

  onClickImage: function (e) {
    var iszan = wx.getStorageSync('myzan')
    if (iszan) {//为true
      wx.showToast({
        title: '已点过赞~',
        icon: 'none',
        duration: 3000
      })
    } else {
      this.setData({ iszan: true });
      wx.setStorageSync('myzan', true);
      this.startTimer();
      var that = this
      that.setData({
        style_img: 'transform:scale(1.3);'
      })
      setTimeout(function () {
        that.setData({
          style_img: 'transform:scale(1);'
        })
      }, 500);
    }
  },

  clearstorage:function(){
    wx.clearStorage();
    wx.showToast({
      title: '请退出重试~',
      icon: 'none',
      duration: 3000
    })
  },
  startTimer: function () {
    var that = this
    that.setData({
      style_img: 'transform:scale(1.3);'
    })
    setTimeout(function () {
      that.setData({
        style_img: 'transform:scale(1);'
      })
    }, 500)
    that.drawImage([[{ x: 30, y: 400 }, { x: 70, y: 300 }, { x: -50, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 30, y: 300 }, { x: 80, y: 150 }, { x: 30, y: 0 }], [{ x: 30, y: 400 }, { x: 0, y: 90 }, { x: 80, y: 100 }, { x: 30, y: 0 }]])

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