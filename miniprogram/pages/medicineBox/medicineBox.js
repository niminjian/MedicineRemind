// 用户输入的药物名称
let na='';
// 用户输入的服药频率
let fre ='';
Page({
    onLoad() { //一进来的时候默认执行onLoad()方法
        this.getList();
    },  
    onShow: function () {  //退到这个页面时刷新
        this.getList();
    },
    // 获取列表数据
    getList(){
        // es6简洁写法
        wx.cloud.database().collection('medicineBox').get() //拿到数据库的实例
        .then(res => {
            console.log('请求成功111', res);
            this.setData({ //注意要对list赋值
                list: res.data  //即使不定义data，也能将数据渲染到页面上
            })
        }).catch(err => {
            console.log('请求失败');
        })
    },
    // 获取用户输入的药物名称
    getName(e){
        na = e.detail.value;
        console.log(na);
    },
    // 获取用户输入的药物服用次数
    getFrequency(e){
        fre = e.detail.value;
        console.log(fre);
    },
    // 添加药物到药箱
    addMedicine(){
        if(na=='') {
            wx.showToast({
                icon:"none",
                title: '药物名不能为空',
            })
        }
        else if(fre == '') {
            x.showToast({
                icon:"none",
                title: '服用频率不能为空',
              })
        }
        wx.cloud.database().collection('medicineBox')
        .add({
            data:{
                name: na,
                frequency: fre
            }
        })
        .then(res=>{
            console.log('添加成功', res);
            wx.cloud.database().collection("medicineBox")
            .get()
            .then(res => {
                console.log('药物列表请求成功');
                this.setData({
                    list: res.data
                })
            })
            .catch(res=>{
                console.log('商品列表请求失败');
            })
        })
        .catch(res=>{
            console.log('添加失败', res);
        })
    },
    // 跳转到商品详情页
    goDetail(e){
        console.log('跳转', e.currentTarget.dataset.id);
        wx.navigateTo({
          // 跳转到详情页面同时携带商品id
          url: '/pages/medicineBoxInfo/medicineBoxInfo?id=' + e.currentTarget.dataset.id,
        })
    },

    goBtnH() {
        wx.navigateTo({ //指定跳转到哪个页面
          url: '/pages/handInputMedicine/handInputMedicine',
        })
    }
})