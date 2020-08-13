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

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
    VerifiedMacAddressesComponent,
    ResultComponent,
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
