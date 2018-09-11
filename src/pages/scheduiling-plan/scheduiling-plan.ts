import {Component} from '@angular/core';

import {Platform} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HttpSerProvider} from "../../providers/http-service/http-service";
import {NavController} from 'ionic-angular';
import {NewtaskdetailPage} from "../newtaskdetail/newtaskdetail";
import {PersonHomeDetailPage} from "../person-home-detail/person-home-detail";
import {PersondetailPage} from "../persondetail/persondetail";
import {PoundlistPage} from "../poundlist/poundlist";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FillWeightPage} from "../fill-weight/fill-weight";
@Component({
  templateUrl: 'scheduiling-plan.html',
  selector: 'scheduiling-plan',

})
export class ScheduilingPlanPage {
  task = 'new'
  pet: string = "task";
  isAndroid: boolean = false;
  a: any;
  factoryname: any;
  time: any;
  master: any;
  check: any;
  pp: any;
  code: any;
  carcode: any;
  time2: any;
  amount: any;
  name;
  any;
  address: any;
  b: any;
  arr: any;
  day: any;
  factory: any;
  data: any;
  shabi: any;
  Poundlist;
  content;
  todo: FormGroup;
  todo2: FormGroup;
  autoManufacturers: any;
  bid: any;


  constructor(public alertCtrl: AlertController, public req: HttpSerProvider, public navCtrl: NavController
    ,
              private formBuilder: FormBuilder) {
    this.Poundlist = PoundlistPage;
    var that = this;

    let json2 = {};
    let json3 = {a:1};
    that.todo = that.formBuilder.group(json2);
    that.todo2 = that.formBuilder.group(json3);

    // this.fethdata();

  }

  fethdata() {
    let that = this;
    this.req.getnotloading('queryDelivery', {}).subscribe(function (ok) {
      that.content = ok.data;
      let json = {};
      let json2 = {};
      that.content.forEach(function (item) {
        let key = item.cdeliveryid;
        json[key] = false

      });
      that.content.forEach(function (item) {
        // let key = item.cdeliveryid;
        // json[key] = false
        item.deliveryDetailDtos.forEach(function (item) {
          let key=   item.cdeliverybid;
          json2[key] = false
        });

      })
      console.log(json2, "json---2")

      that.todo = that.formBuilder.group(json);
      that.todo2 = that.formBuilder.group(json2);



    }, function (err) {
    });

  }

  sysChanged() {
    this.fethdata();

  }
  ionViewDidLeave(){
    this.fethdata();

  }
  ionViewWillEnter() {
    this.fethdata();
  }
  logForm() {
    // console.log()

    let json = this.todo.value;
    let arr = [];
    for (let key in json) {

      if (json[key] == true) {
        arr.push(key);

      }


    }
    let id = arr.join(',')
    var that = this;
    // /api/receiveTask
    this.req.getnotloading('receiveTask', {cdeliveryids: id}).subscribe(function (ok) {
      let prompt2 = that.alertCtrl.create({
        title: '接受成功',
        message: "成功！",

        buttons: [

          {
            text: '确定',
            handler: data => {
              that.content = that.content.filter(item => arr.indexOf(item.cdeliveryid) < 0)
              that.fethdata();
              // /api/v1/taskPlanComment/{taskPlanCommentId}/taskPlanCommentReply
              // /api/v1//{taskPlanId}/

            }
          }
        ]
      });
      prompt2.present();
    }, function (err) {

    })

  }
  logForm2() {
    // console.log()

    let json = this.todo2;
    console.log(json, "jsondeliveryDetailDtos")
    let arr = [];
    for (let key in json) {
      console.log(key, "...")

      if (json[key] == true) {
        arr.push(key);

      }


    }
    console.log(arr, "...")
    let id = arr.join(',')
    var that = this;
    // /api/receiveTask
    this.req.getnotloading('receiveTask', {cdeliveryids: id}).subscribe(function (ok) {
      let prompt2 = that.alertCtrl.create({
        title: '接受成功',
        message: "成功！",

        buttons: [

          {
            text: '确定',
            handler: data => {
              that.content = that.content.filter(item => arr.indexOf(item.cdeliveryid) < 0)
              that.fethdata();
              // /api/v1/taskPlanComment/{taskPlanCommentId}/taskPlanCommentReply
              // /api/v1//{taskPlanId}/

            }
          }
        ]
      });
      prompt2.present();
    }, function (err) {

    })

  }

  todoStart(status, item) {
    let that = this;
    if (status == 1) {
      that.req.postQuery('buttonCommit', {}, {requestType: 2, hid: item.cdeliveryid}, function (ok) {
        // item.
        item.vdef17 = 2;
      }, function (err) {

      })
    }
  }
  cometocus(cdeliveryid,item,detai){
    // alert(1)
    let that=this;
    console.log(cdeliveryid,this.autoManufacturers)
   if(this.autoManufacturers&&cdeliveryid&&detai.vbdef15=='~'){
     that.req.postQuery('buttonCommit', {}, {requestType: 5, hid: cdeliveryid,bid:this.autoManufacturers}, function (ok) {
       // item.
       detai.vbdef15 = 0;
     }, function (err) {

     })
   }
  }

  comestart(cdeliveryid,item,detai){
    let that=this;
    // alert(1)
    // alert(detai.customername)

   if(this.autoManufacturers&&cdeliveryid&&detai.vbdef15==0){
     that.req.postQuery('buttonCommit', {}, {requestType: 6, hid: cdeliveryid,bid:this.autoManufacturers}, function (ok) {
       // item.
       detai.vbdef15 = 1;
     }, function (err) {

     })
   }
  }
  comeent(cdeliveryid,item,detai){
   if(detai.vbdef15=='1'){
     this.navCtrl.push(FillWeightPage,{title:false,bang:item.defcode,hid:cdeliveryid,bid:this.autoManufacturers})

   }
  }
  overgame(cdeliveryid,item,detai){
   if(detai.vbdef15=='2'){
     this.navCtrl.push(FillWeightPage,{title:false,hid:cdeliveryid,bid:this.autoManufacturers,status:'over'})

   }
  }
  Changed($event){
    // alert(1)
    console.log($event)
    this.bid=$event;
  }
  goto(status, item) {
    let that = this;
    if (status == 0) {
      // alert(status)
      that.req.postQuery('buttonCommit', {}, {requestType: 1, hid: item.cdeliveryid}, function (ok) {
        // item.
        item.vdef17 = 1;
      }, function (err) {

      })
    }
  }

  outCompany(status, item) {

    let that = this;
    if (status == 3) {
      that.navCtrl.push(FillWeightPage, {status: 3, itemId: item.cdeliveryid})


      // that.req.postQuery('buttonCommit',{},{requestType:2,hid:item.cdeliveryid},function (ok) {
      //   // item.
      //   item.vdef17=3;
      // },function (err) {
      //
      // })
      // this.navCtrl.push(FillWeightPage, {status: 2, itemId: item.cdeliveryid})

    }
  }


  todoenstart(status, item) {
    let that = this;
    if (status == 2) {

      this.navCtrl.push(FillWeightPage, {status: 2, itemId: item.cdeliveryid})

    }
  }

  todoTask(status, item) {
    if (status == 2) {
      this.navCtrl.push(FillWeightPage, {status: 3})
    }
    else if (status == 3) {
      this.navCtrl.push(FillWeightPage, {status: 3})
    } else if (status == 4) {
      this.navCtrl.push(FillWeightPage, {status: 4})

    }
  }

  complite(id, item) {
    console.log(item, "item")
  }

  checkboxOnclick(name) {
    let input = document.getElementById(name);

    console.log(input, "aaa");
    // console.log(this.check)
  }

  gotopoundlist() {


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

  detail() {

    this.navCtrl.push(NewtaskdetailPage);
  }

  per() {
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

