import {Component} from '@angular/core';
import {NavController, AlertController, Platform} from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {IntroductionPage} from "../introduction/introduction";
import {Geolocation} from "@ionic-native/geolocation";
import {HowSafePage} from "../how-safe/how-safe";

import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public alertCtrl: AlertController, private platform: Platform, public http: Http) {

    this.platform.ready().then(() => {
      this.geoLocationPermissions();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    let registrationId = localStorage.getItem("deviceTokenForPushNotification");
    let bodyinner: string = "deviceid=" + registrationId + "&field=walkthrough" + "&value=1",
      typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headersinner: any = new Headers({ 'Content-Type': typeinner }),
      optionsinner: any = new RequestOptions({ headers: headersinner }),
      urlinner: any = "http://denyodev1.stridecdev.com/firesafety/update.php";
    let resinner;
    // this.showAlert('Device Inert API:', url + "?" + body);
    this.http.post(urlinner, bodyinner, optionsinner)
      .subscribe((data) => {
        resinner = data.json();
      });
  }

  gotoSettings() {
    this.navCtrl.push(SettingsPage);
  }

  gotoIntroduction() {
    this.navCtrl.push(IntroductionPage);
  }

  gotoSafetyTips() {
    this.navCtrl.parent.select(3);
  }

  gotoPromotion() {
    window.localStorage.setItem('segment', 'promotion');
    this.navCtrl.parent.select(4);
  }

  gotoWhatsOn() {
    window.localStorage.setItem('segment', 'whats-on');
    this.navCtrl.parent.select(1);
  }

  geoLocationPermissions() {
    this.geolocation.getCurrentPosition().then(resp => {
      console.log(resp);

    }).catch(error => {
      console.log(error);
    });
  }

  gotoHowSafe() {
    this.navCtrl.push(HowSafePage);
  }

}
