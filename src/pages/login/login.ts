import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HttpClient, HttpParams } from '@angular/common/http';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {HttpSerProvider} from "../../providers/http-service/http-service";
import {MyTestPage} from "../my-test/my-test";
import {MyTestPageNewPage} from "../my-test-page-new/my-test-page-new";
import {ScheduilingPlanPage} from "../scheduiling-plan/scheduiling-plan";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  username:any;
  password:any
  constructor(public navCtrl: NavController,private bluetoothSerial: BluetoothSerial,public req:HttpSerProvider) {
    // req.getHotMovies()
    // this.bluetoothSerial.list()
    let that=this;
    if(this.req.getToken()){
      this.navCtrl.setRoot(ScheduilingPlanPage)
    }
    // this.bluetoothSerial.discoverUnpaired().then(data=>{
    //   alert(JSON.stringify(data)+"data")
    //   that.bluetoothSerial.connect(data[0].relatedAddress).subscribe(function (dele) {
    //     alert(dele+"abc")
    //
    //   })
    // })


  }

  login() {
    var that = this;
    // alert(this.username);
    if (this.username && this.password) {
      this.req.postLogin('login', {userCode: this.username, password: this.password}, function (res,msg) {
        // alert("ok")
        let data = res.data
        if(res.code=='500'){

          // alert(1)
          that.req.showerr("登录失败")

          that.req.clearToken()
        }
         else {
          // alert(data)
          console.log(data.token)
          // alert("ok")
          that.req.setToken({token: data.token});
          that.navCtrl.push(ScheduilingPlanPage);

          // that.navCtrl.push(HomeIndexPage)

        }
      }, function (err) {
        // alert(err)
        console.log("err", err)
        that.req.showerr(err.error.message)
        // that.req.closeLoadView();
      })

    } else {
      alert("账号密码不能为空")
    }
  }



}
