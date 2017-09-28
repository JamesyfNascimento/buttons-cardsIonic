import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class Cards {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cards');
  }

}
