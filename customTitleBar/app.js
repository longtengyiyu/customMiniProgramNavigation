App({
  onLaunch: function () {
    
  },
  onShow: function(){
    this.setNavigation();
  },
  appData:{
    startBarHeight: 0,
    navgationHeight: 0,
    startPaddingTop: 0 //iphx paddingtop
  },
  setNavigation: function () {
    let sHeight = 20
    let nHeight = 44
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        that.appData.startPaddingTop = 20
        if (res.model.indexOf('iPhone X') != -1) {
          that.appData.startPaddingTop = 40
          sHeight = 44
        }
        that.appData.startBarHeight = sHeight,
        that.appData.navgationHeight = nHeight
      }
    })
  }
  
})
