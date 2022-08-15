// pages/mapdetail/mapdetail.js
let plugin = requirePlugin('routePlan');
let key = 'YLFBZ-47HLQ-R655T-GYRGY-BCZR6-NMFFX';  //使用在腾讯位置服务申请的key
let referer = '便民核酸';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
  'name': '北京西站',
  'latitude': 39.894806,
  'longitude': 116.321592
});


Page({

  /**
   * 页面的初始数据
   */
  data: {
    lng:0,
    lat:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title:options.name
    })
    this.getAdr(options.lat,options.lng)

  },
  getAdr(lat,lng){
    this.setData({
      lng:lng,
      lat:lat,
    })
  },
  gotoHere(){

    this.endPoint({
      name: '北京西站',
      latitude: this.data.lng,
      longitude: this.data.lat
    })

    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getAdr()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})