import { Component, ViewChild } from '@angular/core';
import { StatusBar } from "@ionic-native/status-bar"
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { Http, Headers, RequestOptions } from '@angular/http';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusbar: StatusBar, public http: Http, public toastCtrl: ToastController) {
    this.statusbar.backgroundColorByHexString('#3023AE');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
    window.localStorage.setItem('walkthrough', '');
  }

  getStarted() {
    this.navCtrl.push(HomePage);
    window.localStorage.setItem('walkthrough', 'viewed');
    this.navCtrl.setRoot(TabsPage);
  }

  gotoSlide2() {
    let registrationId = localStorage.getItem("deviceTokenForPushNotification");
    let bodyinner: string = "deviceid=" + registrationId + "&title=Easy Access to Fire Safety Tips" + "&message=Readily access information and essential tips about fire safety.",
      typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headersinner: any = new Headers({ 'Content-Type': typeinner }),
      optionsinner: any = new RequestOptions({ headers: headersinner }),
      urlinner: any = "http://denyodev1.stridecdev.com/firesafety/firesafetypush.php";
    let resinner;
    // this.showAlert('Device Inert API:', url + "?" + body);
    this.http.post(urlinner, bodyinner, optionsinner)
      .subscribe((data) => {
        resinner = data.json();
      });
    this.slides.slideTo(1);
    this.statusbar.backgroundColorByHexString('#F76B1C');
  }

  gotoSlide3() {
    let registrationId = localStorage.getItem("deviceTokenForPushNotification");
    let bodyinner: string = "deviceid=" + registrationId + "&title=1-Click SOS Emergency Numbers" + "&message=Rocket fast access to all emrgency numbers at you fingertips.",
      typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
      headersinner: any = new Headers({ 'Content-Type': typeinner }),
      optionsinner: any = new RequestOptions({ headers: headersinner }),
      urlinner: any = "http://denyodev1.stridecdev.com/firesafety/firesafetypush.php";
    let resinner;
    // this.showAlert('Device Inert API:', url + "?" + body);
    this.http.post(urlinner, bodyinner, optionsinner)
      .subscribe((data) => {
        resinner = data.json();
      });
    this.slides.slideTo(2);
    this.statusbar.backgroundColorByHexString('#F5515F');
  }

}
