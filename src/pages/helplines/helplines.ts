import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import {SMS} from "@ionic-native/sms";
import {SettingsPage} from "../settings/settings";
import {IntroductionPage} from "../introduction/introduction";
import {HomePage} from "../home/home";
import {SafetytipsPage} from "../safetytips/safetytips";
import {StoreintroPage} from "../storeintro/storeintro";
import {NewsPage} from "../news/news";

/**
 * Generated class for the HelplinesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helplines',
  templateUrl: 'helplines.html',
})
export class HelplinesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, public alertCtrl: AlertController, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelplinesPage');
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

  gotoSafetyTips() {
    this.navCtrl.push(SafetytipsPage);
  }

  gotoStore() {
    this.navCtrl.push(StoreintroPage, {tab: 'store-intro'});
  }

  gotoNews() {
    this.navCtrl.push(NewsPage, {tab: 'on-the-news'});
  }

  sendHelpMessage(){
    this.platform.ready().then(() =>{
      this.sms.send('+923224663338', 'HELP ME !!!!').then((resp) => {
        let alert = this.alertCtrl.create({
          title: 'Message Sent',
          subTitle: 'Your distress message has been sent.',
          buttons: ['OK']
        });
        alert.present();
      }).catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'Message Failed',
          subTitle: 'Your distress message cannot be sent.',
          buttons: ['OK']
        });
        alert.present();
      });
    });
  }

}
