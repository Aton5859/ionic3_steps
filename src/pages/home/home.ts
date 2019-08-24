import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showData: any[];

  constructor(public navCtrl: NavController) {
    this.showData = [];
  }

  ionViewWillEnter() {
    this.showData = [
      {
        text: '您的订单已打印完毕',
        status: 'Y'
      },
      {
        text: '您的订单已拣货完成',
        status: 'Y'
      },
      {
        text: '扫描员已经扫描',
        status: 'Y'
      },
      {
        text: '打包成功',
        status: 'Y'
      },
      {
        text: '您的订单在京东【北京顺义分拣中心】发货完成，准备送往京东【北京朝阳区花家地】分拣中心',
        status: 'Y'
      },
      {
        text: '您的订单在京东【北京朝阳区花家地】分拣中心验货成功，正在分配配送员',
        status: 'I'
      },
      {
        text: '配送员【***】已出发，联系电话【123456789】，感谢您的耐心等待，参加评价还能赢得更多惊喜礼品哦~',
        status: 'N'
      }
    ];
  }

}
