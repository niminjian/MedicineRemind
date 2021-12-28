Page({
    data: {
        medicine: {}
    },
    onLoad(options){
        // 查询单条数据
        var id = options.id;
        wx.cloud.database().collection('medicineBox')
        .doc(id)
        .get()
        .then(res => {
            console.log('商品详情页请求成功', res);
            this.setData({
                medicine: res.data
            })
        })
        .catch(res=>{
            console.log('商品详情页请求失败', res);
        })
    }
})