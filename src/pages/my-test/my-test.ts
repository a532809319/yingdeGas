import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-service/http-service";

/**
 * Generated class for the MyTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-my-test',
  templateUrl: 'my-test.html',
})
export class MyTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public  req:HttpSerProvider) {

  }
  openMenu(){
    // alert(1)
    let that=this;
    this.req.get('queryDelivery',{}).subscribe(function (ok) {
      alert(1)
      that.req.closeLoadView();

    },function (err) {

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTestPage');
  }

}
