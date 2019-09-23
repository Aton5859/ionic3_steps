import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { http } from "../../common/http.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showData: any[];

  constructor(
    public navCtrl: NavController,
    public http: http
  ) {
    this.showData = [];
  }

  ionViewWillEnter() {
  }

  getData() {
    try {
      let that: this = this;
      that.http.get(
        "/getIonicStepsShowDatas",
        "",
        result => {
          that.showData = result;
        }
      );
    } catch (error) {
      alert(error);
    }
  }

  clearData() {
    try {
      let that: this = this;
      that.showData = [];
    } catch (error) {
      alert(error);
    }
  }

}
