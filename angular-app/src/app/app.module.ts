import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VerifiedMacAddressesComponent } from './components/verified-mac-addresses/verified-mac-addresses.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule }   from '@angular/common/http';
import { ResultComponent } from './components/result/result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MacAddressDetailsComponent } from './components/mac-address-details/mac-address-details.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { BlockDetailsComponent } from './components/block-details/block-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
    VerifiedMacAddressesComponent,
    ResultComponent,
    HomeComponent,
    MacAddressDetailsComponent,
    VendorDetailsComponent,
    BlockDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
