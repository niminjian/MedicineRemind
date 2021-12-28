// 用户输入的药物名称
let na='';
// 用户输入的服药简介
let intro ='';  //全局变量
Page({
    // 获取用户输入的药物名称
    getName(e){
        na = e.detail.value;        
        //console.log(na);
        console.log(e);
    },
    // 获取用户输入药物简介
    getIntro(e){
        intro = e.detail.value;
        console.log(intro);
    },
    addMedicine(){
        if(na=='') {    //输入为空时添加弹窗提示
            wx.showToast({
                icon:"none",
                title: '药物名不能为空',
            })
        }
        else if(intro == '') {
            wx.showToast({
                icon:"none",
                title: '药物简介不能为空',
              })
        }else {
            wx.cloud.database().collection('medicineBox')
            .add({
                data:{
                    name: na,
                    intro: intro
                }
            })
            .then(res=>{
                console.log('添加成功', res);
                wx.showToast({
                    title: '添加成功！',
                });
                setTimeout(function(){
                    wx.navigateBack();
                }, 1000);
            }).catch(res=>{
                console.log('添加失败', res);
            })
        }
    }
})