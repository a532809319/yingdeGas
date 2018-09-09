import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-service/http-service";
import {NavController} from'ionic-angular';
import {NewtaskdetailPage} from "../newtaskdetail/newtaskdetail";
import {PersonHomeDetailPage} from "../person-home-detail/person-home-detail";
import {PersondetailPage} from "../persondetail/persondetail";
import {PoundlistPage} from "../poundlist/poundlist";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FillWeightPage} from "../fill-weight/fill-weight";

@Component({
  templateUrl: 'scheduiling-plan.html'
})
export class ScheduilingPlanPage {
  task='new'
  pet: string = "task";
  isAndroid: boolean = false;
  a: any ;
  factoryname:any;
  time:any;
  master:any;
  check:any;
  pp:any;
  code:any;
  carcode:any;
  time2:any;
  amount:any;
  name;any;
  address:any;
  b:any;
  arr:any;
  day:any;
  factory:any;
  data:any;
  shabi:any;
  Poundlist;
  content;
  todo: FormGroup;




  constructor(public alertCtrl: AlertController,public req:HttpSerProvider,public navCtrl:NavController
  ,
              private formBuilder: FormBuilder
  ){
  this.Poundlist=PoundlistPage;
   var that=this;

    let json2=  {
    }
    that.todo = that.formBuilder.group(json2);

    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      let shabi =ok;
      that.content=ok.data;
      let json={
      };
      that.content.forEach(function (item) {
       let key= item.cdeliveryid;
       json[key]=false

      })
      that.todo = that.formBuilder.group(json);

      console.log(json,"json---")


    }, function (err) {
    });

  }
  logForm(){
    // console.log()
    let json=this.todo.value;
    let arr=[];
     for (let key in json){
       console.log(key,"...")

       if(json[key]==true){
         arr.push(key);

       }


     }
     console.log(arr,"...")
    let id=arr.join(',')
    var that=this;
     // /api/receiveTask
    this.req.getnotloading('receiveTask',{cdeliveryid:id}).subscribe(function (ok) {
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
    },function (err) {

    })

  }
  todoStart(status,item){
    let that=this;
    if(status==2){
      that.req.postQuery('buttonCommit',{},{requestType:2,hid:item.cdeliveryid},function (ok) {
        // item.
        item.vdef17=3;
      },function (err) {

      })
    }
  }
  todoenstart(status,item){
    let that=this;
    if(status==3){
      // that.req.postQuery('buttonCommit',{},{requestType:2,hid:item.cdeliveryid},function (ok) {
      //   // item.
      //   item.vdef17=3;
      // },function (err) {
      //
      // })
      this.navCtrl.push(FillWeightPage,{status:3})

    }
  }
  todoTask(status,item){
    if(status==2){
      this.navCtrl.push(FillWeightPage,{status:3})
    }
    else  if(status==3){
      this.navCtrl.push(FillWeightPage,{status:3})
    }else if(status==4){
      this.navCtrl.push(FillWeightPage,{status:4})

    }
  }
  complite(id,item){
  console.log(item,"item")
  }
  checkboxOnclick(name){
  let input =document.getElementById(name);

    console.log(input,"aaa");
 // console.log(this.check)
  }
gotopoundlist(){


  this.navCtrl.push(PoundlistPage);

}
    // getjson(){
    //   return{
    //     a:1,b:2
    //   }
    // };
  /*rec(){
    let that=this;
    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      let data = ok;


  /!* var json= {
      factoryname: 'factoryname', carcode: "carhanger", time: 'date', time2: 'date', master: 'aaa', pp: 'bbb'
   ,name:'customername',address:'xxx',amount:'2'}*!/
 /!*  that.factoryname=ok.factoryname;
   this.carcode=ok.carhanger;
   that.code=ok.vvehiclename;
   that.time=ok.time;
   that.time2=ok.time2;
   that.address=ok.address;
   that.amount=ok.amount;
   that.name=ok.name;
   that.master=ok.master;*!/

    }, function (err) {
    });
  }*/

     detail(){

    this.navCtrl.push(NewtaskdetailPage);
  }
  per(){
    this.navCtrl.push(PersondetailPage);
  }
  // constructor(public alertCtrl: AlertController) { }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '接受任务',
      subTitle: '任务接收成功',
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '确认接收任务',
      message: '您还有N个调度单未选中，是否确认接收任务。',
      buttons: [
        {
          text: '确认',
          handler: () => {
            console.log('agree clicked');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('disAgree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}

