import { Component, OnInit } from '@angular/core';
import { VerifiedMacAddress } from "../../domain/verified-mac-address";
import { HttpService } from "../../services/http.service";
import { sessionSaver } from "../../services/session-saver.service";
import { MacAddressesInfo } from "../../domain/mac-addresses-info";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verifiedMacAddress: VerifiedMacAddress;
  verifiedMacAddresses: MacAddressesInfo[];
  error: string;

  constructor(private httpService: HttpService) { }

  saveMacAddress(macAddress: string, info: VerifiedMacAddress): void {
    const savedAddresses = sessionSaver.getMacAddressesInfo();
    const macAddresses = savedAddresses.map((el) => el.macAddress);
    if (!macAddresses.includes(macAddress)) {
      this.verifiedMacAddresses = [... this.verifiedMacAddresses, { macAddress, info }];
      sessionSaver.setMacAddressInfo(this.verifiedMacAddresses);
    }
  }

  checkMacAddress(macAddress: string): void {
    this.httpService.getData(macAddress).subscribe((data: VerifiedMacAddress) => {
      this.verifiedMacAddress = data;
      this.saveMacAddress(macAddress, data);
    });
  }

  ngOnInit(): void {
    this.verifiedMacAddresses = sessionSaver.getMacAddressesInfo();
  }
}
