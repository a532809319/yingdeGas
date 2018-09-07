import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-service/http-service";

/**
 * Generated class for the NewtaskdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newtaskdetail',
  templateUrl: 'newtaskdetail.html',
})
export class NewtaskdetailPage {
  shabi:any;
  dashabi:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public req:HttpSerProvider) {
    let that=this;
    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      let shabi = ok;
      this.dashabi=this.shabi.dashabi;



    }, function (err) {
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtaskdetailPage');
  }

}
