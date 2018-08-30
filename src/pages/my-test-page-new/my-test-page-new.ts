import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MyTestPageNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-my-test-page-new',
  templateUrl: 'my-test-page-new.html',
})
export class MyTestPageNewPage {

  constructor( public navCtrl: NavController,public navParams: NavParams,public platform: Platform,
              public actionsheetCtrl: ActionSheetController) {
  }
  Yasuo(){
    let actionSheet = this.actionsheetCtrl.create({
      title: '技能',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '钢斩闪',
          //role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '面对疾风吧',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: '踏前斩',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: '狂风绝息斩',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: '托儿索',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTestPageNewPage');
  }

}
