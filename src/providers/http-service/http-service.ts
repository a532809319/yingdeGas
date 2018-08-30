
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController } from "ionic-angular";

/*
  Generated class for the HttpSerProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpSerProvider {

  constructor(public http: HttpClient,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    console.log('Hello HttpSerProvider Provider');
  }
  loadingView: any;
 toast:any
  upmsUrl = 'http://192.168.1.80:8082';
  apiUrl = 'http://localhost:8001/api/admin/user/login';
  url='http://192.168.2.130:8080/api/';
  urlApi='http://192.168.2.130:8080/api/';

  public postLogin(url: string, body: any , successCallback, errorCallback): any {
    // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
    // 正式发布不能使用代理，此处要做个处理
    url = this.url+url;
    return this.http.post(url,body, {
      headers: this.getHeaders(), // 添加token信息
    }).subscribe((res: any) => {
      console.log(res,"res")
      this.responseSuccess(res, function (msg) {
        if (successCallback) {
          successCallback(res, msg);
        }
      });
    }, err => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
  }
  public post(url: string, body: any , successCallback, errorCallback): any {
    // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
    // 正式发布不能使用代理，此处要做个处理
    url = this.urlApi+url;
    return this.http.post(url,body, {
      headers: this.getHeaders(), // 添加token信息
    }).subscribe((res: any) => {
      console.log(res,"res")
      this.responseSuccess(res, function (msg) {
        if (successCallback) {
          successCallback(res, msg);
        }
      });
    }, err => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
  }

  /**
   * 处理正式发布环境导致的路径问题，请求出错
   * @param url
   * @returns {any}
   */
  getUrl(url) {
    // TODO 开发环境这段可以先注释掉

    let realUrl;
    // if (url.startsWith('upms')) {
    //   realUrl = this.upmsUrl + '/' + url;
    // } else if (url.startsWith('/upms')) {
    //   realUrl = this.upmsUrl + url;
    // } else if (url.startsWith('api')) {
    //   realUrl = this.apiUrl + '/' + url;
    // } else {
    //   realUrl = this.apiUrl + url
    // }

    realUrl = this.urlApi+url;
    console.log(realUrl)
    return realUrl;
  }

  // get数据
  public get(url: string, params?: any): any {
    const token = this.getToken();
    this.showLoadingView();

    let requsrl = this.getUrl(url);
    console.log(requsrl)
    return this.http.get(requsrl, {
      headers: this.getHeaders(), // 添加token信息
      params: params
    });

  };

  public getnotloading(url: string, params?: any): any {
    const token = this.getToken();
    // this.showLoadingView();

    let requsrl = this.getUrl(url);
    console.log(requsrl)
    return this.http.get(requsrl, {
      headers: this.getHeaders(), // 添加token信息
      params: params
    });

  }
  public PostQuery(url: string, params?: any): any {
    const token = this.getToken();
    // this.showLoadingView();

    let requsrl = this.getUrl(url);
    console.log(requsrl)
    return this.http.post(requsrl,{}, {
      headers: this.getHeaders(), // 添加token信息
      params: params
    });
  }
  public put(url: string, params?: any): any {
    const token = this.getToken();
    // this.showLoadingView();

    let requsrl = this.getUrl(url);
    console.log(requsrl)
    return this.http.put(requsrl,{}, {
      headers: this.getHeaders(), // 添加token信息
      params: params
    });
  }

  // 删除相关请求
  public delete(url: string, params?: any): any {
    url = this.getUrl(url);
    return this.http.delete(url, {
      headers: this.getHeaders(), // 添加token信息
      params: params
    });
  }


  /**
   * 头部信息获取，主要用于处理token
   */
  private getHeaders() {
    const token = this.getToken();
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Accept': '*/*',

      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'};
    if (token) {
      headers['token'] = token;
    }
    return new HttpHeaders(headers);
  }
 public showLoadingView() {
    this.loadingView = this.loadingCtrl.create({
      content: "加载中..",
      dismissOnPageChange: false
    });
    this.loadingView.present();
    // this.showLoading = true;
  }
  public showerr(err) {
    this.toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
    });
    this.toast.present();
    // this.showLoading = true;
  }


  /**
   * 处理响应的事件
   * @param res
   * @param {Function} error
   */
 public closeLoadView() {
    this.loadingView.dismiss();
    // this.showLoading = false;
  }
  private responseSuccess(res: any, callback) {
    callback(res);
    // if(res.token){
    //   console.log(res.token)
    //   this.setToken({token:res.token})
    // }

    // if (res.error !== '0') { // 失败
    //   if (res.msg) {
    //     this.closeLoadView();
    //
    //     callback({code: res.code, msg: res.msg});
    //   } else {
    //     const data = res.data;
    //     let errorMsg = '操作失败！';
    //     data.map(i => {
    //       errorMsg = i.errorMsg + '\n';
    //     });
    //     callback({code: res.code, msg: errorMsg});
    //   }
    // } else {
    //   callback(res);
    // }
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param err
   */
  private requestFailed(url: string, err) {
    let msg = '请求发生异常';
    const status = err.status;
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    } else {
      msg = '未知错误，请检查网络';
    }
    return msg;

  }

  /**
   * 使用本地缓存的方式来获取token信息
   */
  getToken() {
    return window.localStorage.getItem('token');
  }

  /**
   * 将token信息保存到本地缓存中 用缓存的形式实现token验证
   * @param token
   */
  setToken(token) {
    // 目前只解析token字段，缓存先只存该字段
    //  + token.name + token.email + token.avatar + token.id + token.time
    // JSON.stringify(token)
    window.localStorage.setItem('token',
      token.token);
  }

  /**
   * 清理token
   */
  clearToken() {
    window.localStorage.setItem('token', null);
  }

  // 监听初次加载事件入口
  load() {
    if (this.getToken()) {
      //  验证token信息，验证通过继续处于登录状态
    } else {
      // 正常去登录页面

    }
  }
}
