import { Component } from '@angular/core';
import { Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WalkthroughPage } from "../pages/walkthrough/walkthrough";
import { TabsPage } from "../pages/tabs/tabs";
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = (window.localStorage.getItem('walkthrough')) ? TabsPage : WalkthroughPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push, public alertCtrl: AlertController, public http: Http, public toastCtrl: ToastController) {
    platform.ready().then(() => {
     // localStorage.setItem("deviceTokenForPushNotification",'dETI5JWUbS4:APA91bF3VDjaiHjazXzz7JE9JwRGgOOs9plc9OtYtsHEPi-yUmZxZU56OunLZSM3Zgcnf8vOk1_QqyWcdSww4u8YplgtGwrg1ysEkxoP7AA5fcbmFM82OZE_KcfnTBW4gwjUAqjom_jL');
      this.initPushNotification();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#ED1C24');
      splashScreen.hide();
    });
  }
  initPushNotification() {
    // to check if we have permission
    this.push.hasPermission()
      .then((res: any) => {

        if (res.isEnabled) {
        } else {
        }

      });

    //to initialize push notifications


    const options: PushOptions = {
      android: {
        senderID: '7125886423',
        forceShow: false,
        vibrate: true,
        sound: 'true'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe((registration: any) => {
      // this.showAlert('deviceTokenForPushNotification', registration.registrationId);
      localStorage.setItem("deviceTokenForPushNotification", registration.registrationId);



      let body: string = "deviceid=" + registration.registrationId,
        type: string = "application/x-www-form-urlencoded; charset=UTF-8",
        headers: any = new Headers({ 'Content-Type': type }),
        options: any = new RequestOptions({ headers: headers }),
        url: any = "http://denyodev1.stridecdev.com/firesafety/deviceidinsert.php";
      let res;
      // this.showAlert('Device Inert API:', url + "?" + body);
      this.http.post(url, body, options)
        .subscribe((data) => {
          res = data.json();
          //this.showAlert('Insert Response:', JSON.stringify(data));
          //this.showAlert('device_token_id:', res.device_token_id);
          //this.showAlert('deviceid:', res.deviceid);
          //this.showAlert('onoffsettings:', res.onoffsettings);
         
            let bodyinner: string = "deviceid=" + registration.registrationId + "&title=Exclusive Product Offers" + "&message=Get notified product offers exclusively for out app users",
              typeinner: string = "application/x-www-form-urlencoded; charset=UTF-8",
              headersinner: any = new Headers({ 'Content-Type': typeinner }),
              optionsinner: any = new RequestOptions({ headers: headersinner }),
              urlinner: any = "http://denyodev1.stridecdev.com/firesafety/firesafetypush.php";
            let resinner;
            // this.showAlert('Device Inert API:', url + "?" + body);
            this.http.post(urlinner, bodyinner, optionsinner)
              .subscribe((data) => {
                resinner = data.json();
                //this.showAlert('Insert Response:', JSON.stringify(data));
                //this.showAlert('device_token_id:', res.device_token_id);
                //this.showAlert('deviceid:', res.deviceid);
                //this.showAlert('onoffsettings:', res.onoffsettings);
              });
          
        });

    }
    );

    pushObject.on('notification').subscribe((notification: any) => {
      //this.showAlert('JSON Array Value', JSON.stringify(notification));
      if (notification.additionalData.foreground == true) {
        // this.doConfirmRead(notification)
        this.presentToast(notification);

      } else {
        // this.pushDetail(notification);
      }
    }
    );

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  }
  showAlert(titl, msg) {
    let alert = this.alertCtrl.create({
      title: titl,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
  presentToast(notification) {
    let toast = this.toastCtrl.create({
      message: notification.title + ":\n" + notification.message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    toast.onDidDismiss(() => {
      //this.pushDetail(notification);
    });
  }

}

