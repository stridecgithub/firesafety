import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {NewsPage} from "../news/news";
import {HelplinesPage} from "../helplines/helplines";
import {SafetytipsPage} from "../safetytips/safetytips";
import {StoreintroPage} from "../storeintro/storeintro";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  HomeTab = HomePage;
  FireNewsTab = NewsPage;
  HelpLinesTab = HelplinesPage;
  SafetyTipsTab = SafetytipsPage;
  StoreTab = StoreintroPage;

  FireNewsTabParams = {tab: 'on-the-news'};
  StoreTabParams = {tab: 'store-intro'};


  constructor() {

  }


}
