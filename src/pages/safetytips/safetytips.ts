import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {SettingsPage} from "../settings/settings";
import {IntroductionPage} from "../introduction/introduction";
import {HelplinesPage} from "../helplines/helplines";
import {StoreintroPage} from "../storeintro/storeintro";
import {NewsPage} from "../news/news";

/**
 * Generated class for the SafetytipsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safetytips',
  templateUrl: 'safetytips.html',
})
export class SafetytipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafetytipsPage');
  }

  gotoSettings() {
    this.navCtrl.push(SettingsPage);
  }

  gotoIntroduction() {
    this.navCtrl.push(IntroductionPage);
  }

  gotoHome() {
    this.navCtrl.push(HomePage)
  }

  gotoHelpLines() {
    this.navCtrl.push(HelplinesPage);
  }

  gotoStore() {
    this.navCtrl.push(StoreintroPage, {tab: 'store-intro'})
  }

  gotoNews() {
    this.navCtrl.push(NewsPage, {tab: 'on-the-news'});
  }

}
