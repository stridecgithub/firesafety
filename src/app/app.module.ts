import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {Geolocation} from "@ionic-native/geolocation";
import {SMS} from "@ionic-native/sms";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {TermsPage} from "../pages/terms/terms";
import {AboutPage} from "../pages/about/about";
import {IntroductionPage} from "../pages/introduction/introduction";
import {ContactfeedbackPage} from "../pages/contactfeedback/contactfeedback";
import {HelplinesPage} from "../pages/helplines/helplines";
import {SafetytipsPage} from "../pages/safetytips/safetytips";
import {StoreintroPage} from "../pages/storeintro/storeintro";
import {NewsPage} from "../pages/news/news";
import {WalkthroughPage} from "../pages/walkthrough/walkthrough";
import {PrivacyPage} from "../pages/privacy/privacy";
import {TabsPage} from "../pages/tabs/tabs";
import {HowSafePage} from "../pages/how-safe/how-safe";
import {HttpModule} from "@angular/http";
import {ArticleDetailPage} from "../pages/article-detail/article-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalkthroughPage,
    SettingsPage,
    TermsPage,
    AboutPage,
    IntroductionPage,
    ContactfeedbackPage,
    HelplinesPage,
    SafetytipsPage,
    StoreintroPage,
    NewsPage,
    PrivacyPage,
    TabsPage,
    HowSafePage,
    ArticleDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    SettingsPage,
    TermsPage,
    AboutPage,
    IntroductionPage,
    ContactfeedbackPage,
    HelplinesPage,
    SafetytipsPage,
    StoreintroPage,
    NewsPage,
    PrivacyPage,
    TabsPage,
    HowSafePage,
    ArticleDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
