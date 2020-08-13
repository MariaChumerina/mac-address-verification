import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifiedMacAddressesComponent } from './components/verified-mac-addresses/verified-mac-addresses.component';
import { HomeComponent } from "./components/home/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verified-mac-addresses', component: VerifiedMacAddressesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
