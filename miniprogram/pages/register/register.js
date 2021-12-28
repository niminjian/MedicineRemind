// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    school: '',
    num: '',
    year:''

  },

  changeName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  
  changeTel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },

  changeSchool: function (e) {
    this.setData({
      school: e.detail.value
    })
  },

  changeNum: function (e) {
    this.setData({
      num: e.detail.value
    })
  },

  changeYear: function (e) {
    this.setData({
      year: e.detail.value
    })
  },

  bindSubmit:function(e){
    wx.request({
      url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/User/register_by_openid',
      data: {
        openid: wx.getStorageSync('jiaoxue_OPENID'),
        globalData: JSON.stringify(app.globalData.userInfo),
        name: this.data.name,
        tel: this.data.tel,
        school: this.data.school,
        num: this.data.num,
        enter_year: this.data.year
      },
      success: res => {
        console.log('res1',res)
        if (res.data.is_register) {
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          // this.openAlert(res.data.data)
        }
      },
      fail: res => {
      },
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