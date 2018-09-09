import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImagePicker} from "@ionic-native/image-picker";

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
  status:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker,
              private fileTransfer:FileTransferObject) {
  this.status= this.navParams.get('status');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FillWeightPage');
  }
  toPhto(){
    let options={
      maximumImagesCount:5
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        alert(results[i]);
      }
    }, (err) => { });
  }
}
