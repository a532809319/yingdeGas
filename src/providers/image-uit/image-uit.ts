import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ImagePicker} from "@ionic-native/image-picker";
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {ActionSheetController, AlertController} from "ionic-angular";
import { Camera } from '@ionic-native/camera';

/*
  Generated class for the ImageUitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageUitProvider {
  fileTransfer: any;
  uri:any=[];
  constructor(public http: HttpClient,
              private imagePicker: ImagePicker,
              private transfer: FileTransfer,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
              private camera: Camera,) {
    console.log('Hello ImageUitProvider Provider');
    this.fileTransfer = this.transfer.create();

  }

  imgupload(parmas,cb) {
    let that = this;
    let options = {
      maximumImagesCount: 5
    }
    this.imagePicker.getPictures(options).then((results) => {

       cb(results);
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        // alert(results[i]);
        let FileUploadOptions = {
          fileKey: 'files',
          fileName: 'image.jpg',
          httpMethod: 'POST',
          params:parmas,
          mimeType : 'image/jpeg',
          headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'//不加入 发生错误！！
          },
        };
        that.fileTransfer.upload(results[i], 'http://192.168.90.83:8091/api/buttonCommit', FileUploadOptions)
          .then((data) => {
            // success
            that.uri.push(results[i]);
            let prompt2 = that.alertCtrl.create({
              title: '接受成功',
              message: "成功！",

              buttons: [

                {
                  text: '确定',
                  handler: data => {

                    // /api/v1/taskPlanComment/{taskPlanCommentId}/taskPlanCommentReply
                    // /api/v1//{taskPlanId}/

                  }
                }
              ]
            });
            prompt2.present();

          }, (err) => {
            // error
            // alert("err");
            // alert(err)
          })
      }
      // /api/buttonCommit

      // that.fileTransfer.upload(..).then(..).catch(..);
      // alert(2)

      // alert(results.toString());

    }, (err) => {
    });
  }

  presentActionSheet(parmas,cb) {
    let that=this;
    const actionSheet = this.actionSheetCtrl.create({
      title: '选择',
      buttons: [
        {
          text: '选择相册',
          role: 'destructive',
          handler: () => {
             that.imgupload(parmas,function (data) {
               cb(data)
             })
          }
        }, {
          text: '拍照',
          handler: () => {
            console.log('Archive clicked');
            that.cameraUpload(parmas,function (data) {
              cb(data)
            });
          }
        }
      ]
    });
    actionSheet.present();
  }
  cameraUpload(parms,cb){
    const options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
   let that=this;
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      that.uri=imageData;
      cb(imageData)

      // alert(imageData)
      let FileUploadOptions = {
        fileKey: 'files',
        fileName: 'image.jpg',
        httpMethod: 'POST',
        mimeType : 'image/jpeg',

        params: parms,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'//不加入 发生错误！！
        },
      };
      that.fileTransfer.upload(imageData, 'http://192.168.90.83:8091/api/buttonCommit', FileUploadOptions)
        .then((data) => {
          // success
          // alert("ok")
          let prompt2 = that.alertCtrl.create({
            title: '接受成功',
            message: "成功！",

            buttons: [

              {
                text: '确定',
                handler: data => {

                  // /api/v1/taskPlanComment/{taskPlanCommentId}/taskPlanCommentReply
                  // /api/v1//{taskPlanId}/

                }
              }
            ]
          });
          prompt2.present();
        }, (err) => {
          // error
          // alert("err");
          // alert(err)
        })
    }, (err) => {
      // Handle error
    });
  }
 sendImg(){

 }


}
