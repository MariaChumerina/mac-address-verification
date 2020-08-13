import { Component, OnInit } from '@angular/core';
import {VerifiedMacAddress} from "../../domain/verified-mac-address";
import {HttpService} from "../../services/http.service";
import {sessionSaver} from "../../services/session-saver.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verifiedMacAddress: VerifiedMacAddress;
  verifiedMacAddresses: VerifiedMacAddress[];
  error: string;

  constructor(private httpService: HttpService) { }

  checkMacAddress(macAddress) {
    this.httpService.getData(macAddress).subscribe((data: VerifiedMacAddress) => {
      this.verifiedMacAddress = data;
      this.verifiedMacAddresses = [...this.verifiedMacAddresses, data];
      sessionSaver.setMacAddressInfo(this.verifiedMacAddresses);
      console.log(data.macAddressDetails);
    });
  }

  ngOnInit(): void {
  }
}
