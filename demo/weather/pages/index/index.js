//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    region: ["江西省", "赣州市", "兴国县"],
    city:"赣州",
    cond_code: 399,
  },
  changeRegin(e) {
    this.setData(
      { region: e.detail.value ,
        city: e.detail.value[1],
      });
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?location=' + that.data.city + '&key=ba5e11efbbac41b0b839bebf08d4b4b9',
      success: function (res) {
        that.setData({
          temperature: res.data.HeWeather6[0]['now']['tmp'],
          cond_txt: res.data.HeWeather6[0]['now']['cond_txt'],
          pres: res.data.HeWeather6[0]['now']['pres'],
          wind_dir: res.data.HeWeather6[0]['now']['wind_dir'],
          vis: res.data.HeWeather6[0]['now']['vis'],
          wind_spd: res.data.HeWeather6[0]['now']['wind_spd'],
          wind_sc: res.data.HeWeather6[0]['now']['wind_sc'],
          cond_code: res.data.HeWeather6[0]['now']['cond_code'],
        })
        console.log(res.data.HeWeather6[0]['now'])
      }
    })
    console.log(e.detail.value[1])
  },
 
  onLoad: function () {
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?location='+that.data.city+'&key=ba5e11efbbac41b0b839bebf08d4b4b9',
      success:function(res){
        that.setData({
          temperature: res.data.HeWeather6[0]['now']['tmp'],
          cond_txt: res.data.HeWeather6[0]['now']['cond_txt'],
          pres:res.data.HeWeather6[0]['now']['pres'],
          wind_dir: res.data.HeWeather6[0]['now']['wind_dir'],
          vis: res.data.HeWeather6[0]['now']['vis'],
          wind_spd: res.data.HeWeather6[0]['now']['wind_spd'],
          wind_sc: res.data.HeWeather6[0]['now']['wind_sc'],
          cond_code: res.data.HeWeather6[0]['now']['cond_code'],
        })
        console.log(res.data.HeWeather6[0]['now'])
      }
    })
  }
})
