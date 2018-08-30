import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {LoadingController, ToastController} from "ionic-angular";
import {HttpSerProvider} from "./http-service";

/*
  Generated class for the HttpSerProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpApi {

  constructor(public http: HttpClient,
              public  req:HttpSerProvider

              ) {
    console.log('Hello HttpSerProvider APi');
  }

  login(username,passwod){
    let that=this;
    this.req.post('login',{username:username,password:passwod},function (data) {
      // alert("ok")
      console.log(data)
      if(data.token){
        console.log(data.token)
        that.req.setToken({token:data.token});

      }else {
        that.req.showerr("登录是吧")

        that.req.clearToken()
      }
    },function (err) {
      // alert(err)
      console.log("err",err)
      that.req.showerr(err.error.message)
      // that.req.closeLoadView();
    })
  }
}
