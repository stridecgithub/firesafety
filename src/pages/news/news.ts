import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {IntroductionPage} from "../introduction/introduction";
import {SettingsPage} from "../settings/settings";
import {Http} from "@angular/http";
import 'rxjs/operator/map';
import {ArticleDetailPage} from "../article-detail/article-detail";

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  tabs: string;
  postList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    let tab = this.navParams.get('tab');
    this.tabs = tab;

    console.log(tab);

    this.http.get('https://blog.firestore.com.sg/?json=1').map(res => res.json()).subscribe(data => {

      for (var i = 0; i < data.posts.length; i++) {

        if (data.posts[i].custom_fields.s_date && data.posts[i].custom_fields.start_time) {
          var year = data.posts[i].custom_fields.s_date[0].substring(0, 4);
          var month = data.posts[i].custom_fields.s_date[0].substring(4, 6);
          var day = data.posts[i].custom_fields.s_date[0].substring(6, 8);
          var dateArr = new Date(year + "-" + month + "-" + day).toString().split(" ");
          var timeArr = this.tConvert(data.posts[i].custom_fields.start_time[0]).split(":");
          var endTimeArr = this.tConvert(data.posts[i].custom_fields.end_time[0]).split(":");
          var startDateTime = dateArr[0]+" "+dateArr[2]+" "+dateArr[1]+" "+dateArr[3]+"  "+timeArr[0]+":"+timeArr[1]+" - "+endTimeArr[0]+":"+endTimeArr[1];

          this.postList.push({
            postID: data.posts[i].id,
            postTitle: data.posts[i].title.replace("&#8217;","'").substring(0, 25)+" ...",
            postThumb: data.posts[i].thumbnail,
            postDate: startDateTime,
            postDay: dateArr[2],
            postMonth: dateArr[1],
          });
        }
      }

    });

  }

  tConvert(time) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      //time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  gotoArticleDetail (postID){
    this.navCtrl.push(ArticleDetailPage, {
      articleID: postID
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  gotoIntroduction() {
    this.navCtrl.push(IntroductionPage);
  }

  gotoSettings() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewWillEnter() {

    var segmentChange = window.localStorage.getItem('segment');

    if (segmentChange) {
      this.tabs = window.localStorage.getItem('segment');
      window.localStorage.removeItem('segment');
    } else {
      this.tabs = this.navParams.get('tab');
    }

  }

}
