import { Printer } from '@ionic-native/printer/ngx';
import { HttpClientModule } from  '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, NgxWebstorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Printer,InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
