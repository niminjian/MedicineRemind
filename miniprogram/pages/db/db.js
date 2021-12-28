Page({
    onLoad() {
        // es6简洁写法
        wx.cloud.database().collection('medicineBox').get()
        .then(res => {
            console.log('请求成功111', res);
            this.setData({
                list: res.data
            })
        }).catch(err => {
            console.log('请求失败');
        })

    }
})