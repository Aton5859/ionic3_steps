import { Component } from '@angular/core';
import { Platform, IonicApp, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public ionicApp: IonicApp,
    public app: App
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // 监听移动端物理回退键
      this.registerBackButtonAction();
    });
  }

  //全局监听物理返回键
  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      //在主tab页
      let views = this.app.getActiveNav().getActive();
      if (views.component.name === "HomePage" || views.component.name === "AboutPage" || views.component.name === "ContactPage") {
        this.platform.exitApp();
      }
    })
  }
}
