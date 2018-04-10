import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage } from "../terms/terms";
import { AboutPage } from "../about/about";
import { ContactfeedbackPage } from "../contactfeedback/contactfeedback";
import { PrivacyPage } from "../privacy/privacy";
import { Http, Headers, RequestOptions } from '@angular/http';
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
  onoffsettings: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  notificationonoff(evt, field) {
    //console.log(JSON.stringify(evt));
    console.log(evt);
    console.log(field);
    let value = 0;
    if (field == true) {
      value = 1;
    }
    console.log(value);

    let registrationId = localStorage.getItem("deviceTokenForPushNotification");
    let bodyinner: string = "deviceid=" + registrationId + "&field=onoffsettings" + "&value=" + value,
      typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headersinner: any = new Headers({ 'Content-Type': typeinner }),
      optionsinner: any = new RequestOptions({ headers: headersinner }),
      urlinner: any = "http://denyodev1.stridecdev.com/firesafety/update.php";
    let resinner;
    console.log('Device Inert API:' + urlinner + "?" + bodyinner);
    this.http.post(urlinner, bodyinner, optionsinner)
      .subscribe((data) => {
        resinner = data.json();
      
      });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

    let registrationId = localStorage.getItem("deviceTokenForPushNotification");
    let bodyinner: string = "deviceid=" + registrationId,
      typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headersinner: any = new Headers({ 'Content-Type': typeinner }),
      optionsinner: any = new RequestOptions({ headers: headersinner }),
      urlinner: any = "http://denyodev1.stridecdev.com/firesafety/get.php";
    let resinner;

    this.http.post(urlinner, bodyinner, optionsinner)
      .subscribe((data) => {
        resinner = data.json();
        console.log(JSON.stringify(resinner));

        let onoffsettings = resinner.onoffsettings;
        if (onoffsettings == 1) {
          this.onoffsettings = true;
        } else {
          this.onoffsettings = false;
        }
      });

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
