import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TermsPage} from "../terms/terms";
import {AboutPage} from "../about/about";
import {ContactfeedbackPage} from "../contactfeedback/contactfeedback";
import {PrivacyPage} from "../privacy/privacy";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  back() {
    this.navCtrl.pop();
  }

  gotoTerms() {
    this.navCtrl.push(TermsPage);
  }

  gotoAbout() {
    this.navCtrl.push(AboutPage);
  }

  gotoContactfeedback() {
    this.navCtrl.push(ContactfeedbackPage);
  }

  gotoPrivacy() {
    this.navCtrl.push(PrivacyPage);
  }

  // Hide / Show tab bar
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
