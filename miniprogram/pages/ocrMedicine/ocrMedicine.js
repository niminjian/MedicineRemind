Page({
    getFre(s){
      return parseInt(s);
    }
    ,
    data: {
      words: []
    },
    picToTxt() {
      const that = this
      wx.chooseImage({
        success: (res) => {
          //获取图片的临时路径
          const tempFilePath = res.tempFilePaths[0]
          //根据官方的要求  用base64字符编码获取图片的内容
          wx.getFileSystemManager().readFile({
            filePath: tempFilePath,
            encoding: 'base64',
            success: function (res) {
              //调用方法
              that.getImgInfo(res.data)
            },
          })
        },
      })
    },
    //根据图片的内容调用API获取图片文字
    getImgInfo: function (imageData) {
      wx.showLoading({
        title: '识别中...',
      })
      var that = this
      that.getBaiduToken().then(res => {
        console.log(res)
        //获取token
        const token = res.data.access_token
        console.log(token)
        const detectUrl = `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${token}` // baiduToken是已经获取的access_Token      
        wx.request({
          url: detectUrl,
          data: {
            image: imageData
          },
          method: 'POST',
          dataType: 'json',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 必须的        
          },
          success: function (res, resolve) {
            console.log(res)
            //将 res.data.words_result数组中的内容加入到words中           
            that.setData({
              words: res.data.words_result
            })
            console.log('识别后： ' + res.data.words_result)
            wx.hideLoading()
          },
          fail: function (res, reject) {
            console.log('get word fail：', res.data);
            wx.hideLoading()
          },
          complete: function () {
            wx.hideLoading()
          }
        })
      })
    },
    // 获取百度access_token  
    getBaiduToken: function () {
      return new Promise(resolve => {
        var APIKEY = "HgxRmg952flZtoR7E2CidFls"
        var SECKEY = "b3kGY6r5BBtw6YldnpFyojx32VxNhsWn"
        var tokenUrl = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${APIKEY}&client_secret=${SECKEY}`
        var that = this;
        wx.request({
          url: tokenUrl,
          method: 'POST',
          dataType: 'json',
          header: {
            'content-type': 'application/json; charset-UTF-8'
          },
          success: function (res) {
            console.log("[BaiduToken获取成功]", res);
            return resolve(res)
          },
          fail: function (res) {
            console.log("[BaiduToken获取失败]", res);
            return resolve(res)
          }
        })
      })
    }
  })
  
  