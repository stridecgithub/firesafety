import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {IntroductionPage} from "../introduction/introduction";

/**
 * Generated class for the StoreintroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storeintro',
  templateUrl: 'storeintro.html'
})
export class StoreintroPage {

  tabs: string;
  promoContentURL;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private domSanitizer: DomSanitizer) {
    let tab = navParams.get('tab');
    this.tabs = tab;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreintroPage');
  }

  gotoSettings() {
    this.navCtrl.push(SettingsPage);
  }

  gotoIntroduction() {
    this.navCtrl.push(IntroductionPage);
  }

  ionViewWillEnter() {

    this.promoContentURL = this.domSanitizer.bypassSecurityTrustResourceUrl('http://app.firestore.com.sg/static-content/promo.html');

    var segmentChange = window.localStorage.getItem('segment');

    if (segmentChange) {
      this.tabs = window.localStorage.getItem('segment');
      window.localStorage.removeItem('segment');
    } else {
      this.tabs = this.navParams.get('tab');
    }

  }


}
