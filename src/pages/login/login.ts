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
  constructor(public navCtrl: NavController,private bluetoothSerial: BluetoothSerial,public req:HttpSerProvider) {
    // req.getHotMovies()
    // this.bluetoothSerial.list()
    let that=this;

    // this.bluetoothSerial.discoverUnpaired().then(data=>{
    //   alert(JSON.stringify(data)+"data")
    //   that.bluetoothSerial.connect(data[0].relatedAddress).subscribe(function (dele) {
    //     alert(dele+"abc")
    //
    //   })
    // })


  }
  login2(){
    this.req.getnotloading('queryDelivery',{}).subscribe(function (ok) {

    },function (err) {

    })
  }
  login(){
    var that=this;
   this.navCtrl.push(ScheduilingPlanPage);
    this.req.postLogin('login',{userCode:'A0001',password:'123456'},function (ok) {
      // alert("ok")
      let data=ok.data
      if(data.token){
        console.log(data.token)
        // alert("ok")
        that.req.setToken({token:data.token});
        // that.navCtrl.push(HomeIndexPage)

      }else {
        that.req.showerr("登录失败")

        that.req.clearToken()
      }
    },function (err) {
      // alert(err)
      console.log("err",err)
      that.req.showerr(err.error.message)
      // that.req.closeLoadView();
    })

    // this.bluetoothSerial.write('hello world').then(function (ok) {
    //    alert(1)
    // }, function (err) {
    //   alert(2)
    // });
   //  alert(1)
   // // this.getData.getHotMovies();
   //  this.getData.post('a',{username:'hukai',password:'123456'},function (a,b) {
   //    alert(a,b)
   //
   //  },function (er) {
   //
   //  })
   //  this.http.request('http://jsonplaceholder.typicode.com/photos')
   //    .subscribe((res: Response) => {
   //      // this.listData = res.json();
   //      console.log(res,"res")
   //    });
   // let apiUrl = 'http://192.168.2.109:8080/user/login';
   let apiUrl = 'http://localhost:3000';
   let json={username:'hukai',password:'12345a6'};

    // this.data.request('POST',apiUrl,{headers: {
    //   'Content-Type': 'application/json',
    //   'Accept': '*/*'
    // },body:json}).subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //    console.log(res)
    // }, err => {
    //   console.error('ERROR', err);
    // });;
    // this.data.post(apiUrl,json,{headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': '*/*'
    //   }}).subscribe(res=>{
    //   console.log(res)
    // })
    // this.http.post(apiUrl,{username:'hukai',password:'123456'}).subscribe(res=>{
    //   console.log(res)
    // })
  }

}
