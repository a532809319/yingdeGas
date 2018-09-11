import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from "@ionic-native/image-picker";
import {ImageUitProvider} from "../../providers/image-uit/image-uit";
import {HttpSerProvider} from "../../providers/http-service/http-service";

/**
 * Generated class for the FillWeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fill-weight',
  templateUrl: 'fill-weight.html',
})
export class FillWeightPage {
   before:any;
   after:any;
  itemId:any;
  status:any;
  uriarr=[];
  tileselct=true
  uri:any;
  mile:any;
  bang:any;
  hid:any;
  bid:any;
  top:any;
  top1:any;
  top2:any;
  top3:any;
  center:any;
  enmile:any;
  abc='http://t11.baidu.com/it/u=2351108065,3111547518&fm=76';
  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker,
              public  imgUpload:ImageUitProvider,
              public actionSheetCtrl: ActionSheetController,
              public req: HttpSerProvider,

  ) {
  this.itemId= this.navParams.get('itemId');
  this.status= this.navParams.get('status');
  this.tileselct= this.navParams.get('title');
  this.bang= this.navParams.get('bang');
  this.bid= this.navParams.get('hid');
  this.hid= this.navParams.get('bid');
  // alert(this.bid)
  // alert(this.bang)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FillWeightPage');
  }
  save(){
    let that=this;
    // console.log(cdeliveryid,this.autoManufacturers);

    if(that.after>=5&& that.after<30 && that.before>=5&& that.before<30&&this.hid&&this.bid&&this.before-this.after>0){
      that.req.postQuery('buttonCommit', {}, {requestType: 7, bid: this.hid,hid:this.bid,flowMeter:this.before-this.after,poundsBefore:this.before,afterthepound:this.after}, function (ok) {
        // item.
        that.navCtrl.pop();

      }, function (err) {

      })
    }
  }
  save2(){
    let that=this;
    // console.log(cdeliveryid,this.autoManufacturers);

    if(this.top&&this.center){
      that.req.postQuery('buttonCommit', {}, {requestType: 7, bid: this.hid,hid:this.bid,flowMeter:this.center,afterthepound:this.top}, function (ok) {
        // item.
        that.navCtrl.pop();

      }, function (err) {

      })
    }
  }
  save3(){
    let that=this;
    // console.log(cdeliveryid,this.autoManufacturers);

    if(this.top1&&this.top2){
      that.req.postQuery('buttonCommit', {}, {requestType: 7, bid: this.hid,hid:this.bid,poundsBefore:this.top1,afterthepound:this.top2,flowMeter:this.top1-this.top2}, function (ok) {
        // item.
        that.navCtrl.pop();

      }, function (err) {

      })
    }
  }
  toPhto(){
    // alert(1)
    let that=this;
    //  that.imgUpload.imgupload(3);
   if(that.after>=5&& that.after<30 && that.before>=5&& that.before<30&& that.after-that.before>0){



     this.imgUpload.presentActionSheet({requestType: 3,hid:this.itemId,poundsBefore:this.before,afterthepound:this.after,flowMeter:this.after-this.before},function (data) {
       // that.uriarr=data;
       // that.uri=data;
       that.navCtrl.pop();

     });
   }else {
     alert("请输入正确的磅数")
   }
    // this.uriarr=this.imgUpload.uri;


// that.imgUpload.cameraUpload(3);
  }
  overphoto1(){
    // alert(1)
    let that=this;
    //  that.imgUpload.imgupload(3);



     this.imgUpload.presentActionSheet({requestType: '',bid: this.hid,hid:this.bid},function (data) {
       // that.uriarr=data;
       // that.uri=data;
       // that.navCtrl.pop();

     });

    // this.uriarr=this.imgUpload.uri;


// that.imgUpload.cameraUpload(3);
  }
  overphoto2(){
    // alert(1)
    let that=this;
    //  that.imgUpload.imgupload(3);



     this.imgUpload.presentActionSheet({requestType: 8,bid: this.hid,hid:this.bid,flowMeter:this.enmile},function (data) {
       // that.uriarr=data;
       // that.uri=data;
       // that.navCtrl.pop();

     });

    // this.uriarr=this.imgUpload.uri;


// that.imgUpload.cameraUpload(3);
  }
  outCompany(){
    // alert(1)
    let that=this;
    //  that.imgUpload.imgupload(3);
   if(that.mile>0){



     this.imgUpload.presentActionSheet({requestType: 4,hid:this.itemId,poundsBefore:this.mile},function (data) {
       // that.uriarr=data;
       // that.uri=data;
       that.navCtrl.pop();

     });
   }else {
     alert("请输入正确的磅数")
   }
    // this.uriarr=this.imgUpload.uri;


// that.imgUpload.cameraUpload(3);
  }
}
