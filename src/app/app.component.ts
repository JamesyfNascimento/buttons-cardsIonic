import { Cards } from './../pages/cards/cards';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Buttons } from './../pages/buttons/buttons';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: [{title: string, component: any}]  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {title: 'Home Page', component: HomePage},
      {title: 'Buttons', component: Buttons},
      {title: 'Cards', component: Cards}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: {title: string, component: any}): void{
    this.rootPage = page.component;
  }

  onOpen(): void {
    console.log("Menu opened!");
  }

  onClose(): void {
    console.log("Menu closed!");
  }

  onDrag(): void {
    console.log("Menu dragged!");
  }
}

