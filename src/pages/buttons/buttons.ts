import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class Buttons {

  myColor: string = 'dark';
  isDanger: boolean = true;
  isRound: boolean = true;
  isClear: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Buttons');
  }

  onClick(event: MouseEvent): void {
    console.log(event);    
  }

}
