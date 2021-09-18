import { NgModule }           from "@angular/core";
import { BrowserModule }      from "@angular/platform-browser";
import { HttpClientModule }   from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePt               from "@angular/common/locales/pt";
import localeEn               from "@angular/common/locales/en";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }    from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent }   from "./component/home/home.component";

import { BitcoinRateService } from "./service/bitcoin-rate.service";
import { TimerService }       from "./service/timer.service";

registerLocaleData(localePt);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports:      [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:    [
    BitcoinRateService,
    TimerService
  ],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
