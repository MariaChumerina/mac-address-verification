import { Component } from '@angular/core';
import { HttpService } from "./services/http.service";
import { VerifiedMacAddress } from "./domain/verified-mac-address";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
export class AppComponent {
  title = 'Проверка mac-адресов';
  verifiedMacAddress: VerifiedMacAddress;

  constructor(private httpService: HttpService) { }

  onSubmit(macAddress) {
    this.httpService.getData(macAddress).subscribe((data: VerifiedMacAddress) => {
      this.verifiedMacAddress = data;
      console.log(data.vendorDetails);
    });
  }
}
