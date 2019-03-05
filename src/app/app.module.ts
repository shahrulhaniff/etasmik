import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { PopoverPage } from '../pages/popover/popover';
import { CreatePage } from '../pages/create/create';
import { SelectPage } from '../pages/select/select';
import { InvitePage } from '../pages/invite/invite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessagePage,
    PopoverPage,
    CreatePage,
    SelectPage,
    InvitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessagePage,
    PopoverPage,
    CreatePage,
    SelectPage,
    InvitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
