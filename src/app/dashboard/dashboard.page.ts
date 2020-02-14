import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public navCtrl:NavController) { }
  back(): void {
    this.navCtrl.navigateForward('/tabs');
 }
  ngOnInit() {
  }

}
