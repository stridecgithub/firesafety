import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/operator/map';

/**
 * Generated class for the ArticleDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {

  articleID: number;
  articleDetail: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.articleID = navParams.get('articleID');
    this.http.get('https://blog.firestore.com.sg/api/?json=get_post&post_id='+this.articleID).map(res => res.json()).subscribe(articleData => {

      this.articleDetail.push({

        articleTitle: articleData.post.title,
        articleThumb: articleData.post.thumbnail_images.full.url,
        articleContent: articleData.post.content


      });

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailPage');
  }

  back() {
    window.localStorage.setItem('segment', 'whats-on');
    this.navCtrl.parent.select(1);
  }

}
