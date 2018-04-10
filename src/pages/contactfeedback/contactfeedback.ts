import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

/**
 * Generated class for the ContactfeedbackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactfeedback',
  templateUrl: 'contactfeedback.html',
})
export class ContactfeedbackPage {
  @ViewChild('myname') myname;
  @ViewChild('email') email;
  @ViewChild('message') message;

  tabBarElement: any;
  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.data.response = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactfeedbackPage');
  }

  back() {
    this.navCtrl.pop();
  }

  sendMail() {
    var link = 'http://app.firestore.com.sg/email/';
    var myData = JSON.stringify({
      name: this.myname.value,
      email: this.email.value,
      message: this.message.value
    });
    this.http.post(link, myData).subscribe(resp =>{this.data.response = resp["_body"]}, error => {console.log("Ooops")});
  }

  // Hide / Show tab bar
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}
