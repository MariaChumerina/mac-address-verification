import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VerifiedMacAddressesComponent } from './components/verified-mac-addresses/verified-mac-addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
    VerifiedMacAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
