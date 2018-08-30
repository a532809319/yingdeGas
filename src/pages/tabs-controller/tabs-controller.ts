import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { ToDoTaskPage } from '../to-do-task/to-do-task';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewTaskPage;
  tab2Root: any = ToDoTaskPage;
  constructor(public navCtrl: NavController) {
  }
  goToNewTask(params){
    if (!params) params = {};
    this.navCtrl.push(NewTaskPage);
  }goToToDoTask(params){
    if (!params) params = {};
    this.navCtrl.push(ToDoTaskPage);
  }
}
