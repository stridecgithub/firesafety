import { Component, ViewChild } from '@angular/core';
import { StatusBar} from "@ionic-native/status-bar"
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the WalkthroughPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString('#3023AE');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

  getStarted() {
    this.navCtrl.push(HomePage);
    window.localStorage.setItem('walkthrough', 'viewed');
    this.navCtrl.setRoot(TabsPage);
  }

  gotoSlide2() {
    this.slides.slideTo(1);
    this.statusbar.backgroundColorByHexString('#F76B1C');
  }

  gotoSlide3() {
    this.slides.slideTo(2);
    this.statusbar.backgroundColorByHexString('#F5515F');
  }

}
