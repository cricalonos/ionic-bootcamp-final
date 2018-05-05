import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { TabsPage } from '../pages/tabs/tabs';
import { PicturePage } from '../pages/picture/picture';
import { ListPostsPage } from '../pages/list-posts/list-posts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { config } from './credentials';
import { AuthProvider } from '../providers/auth/auth';
import { PostsProvider } from '../providers/posts/posts';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PicturePage,
    ListPostsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PicturePage,
    ListPostsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Camera,
    PostsProvider
  ]
})
export class AppModule { }
