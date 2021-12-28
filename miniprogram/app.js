App({
  // 小程序一启动，就会执行
  onLaunch() {
    console.log('小程序开始启动');
    wx.cloud.init({
      // 云开发环境id
      env: 'cloud1-3gf1n3y57e6026c2',
    })
  }
    
  //   // 展示本地存储能力
  //   var logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)

  //   // 登录
  //   wx.login({
  //     success: res => {
  //       console.log('res',res)
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //       wx.request({
  //         url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/Weixin/code_to_openidv2',
  //         data: {
  //           'code': res.code,
  //           'from': 'wx5ee2da791099a208'
  //         },
  //         success: function (res) {
  //           console.log(res.data)
  //           //将SESSIONID保存到本地storage
  //           wx.setStorageSync('jiaoxue_OPENID', res.data.openid)
  //           wx.request({
  //             url:  'https://zjgsujiaoxue.applinzi.com/index.php/Api/User/getInfo',
  //             data: {
  //               'openid': res.data.openid,
  //             },
  //             success: function (res1) {
  //               wx.setStorageSync('userInfo', res1.data.data)
  //             },
  //           })
  //           if (res.data.is_register== true) {
  //             wx.showModal({
  //               title: '提示',
  //               content: '请先注册',
  //               showCancel: false,
  //               confirmText: "确定",
  //               success: function (res) {
  //                 wx.navigateTo({
  //                   url: '/pages/register/userlogin',
  //                 })
  //               }
  //             })
  //           }
  //         },
  //         fail: function (res) {
  //           console.log('res' + res)
  //         }
  //       })
  //     }
  //   })
  //   // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo

  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // globalData: {
  //   userInfo: null
  // }
})