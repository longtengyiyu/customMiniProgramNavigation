App({
  onLaunch: function () {
    
  },
  onShow: function(){
    this.setNavigation();
  },
  appData:{
    startBarHeight: 0,
    navgationHeight: 0
  },
  setNavigation: function () {
    let sHeight = 20
    let nHeight = 44
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        if (res.model == 'iPhone X') {
          sHeight = 44
        }
        that.appData.startBarHeight = sHeight,
        that.appData.navgationHeight = nHeight
      }
    })
  }
  
})
