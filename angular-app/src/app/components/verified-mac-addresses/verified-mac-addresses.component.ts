import {Component, Input, OnInit} from '@angular/core';
import { VerifiedMacAddress } from "../../domain/verified-mac-address";

@Component({
  selector: 'app-verified-mac-addresses',
  templateUrl: './verified-mac-addresses.component.html',
  styleUrls: ['./verified-mac-addresses.component.css']
})
export class VerifiedMacAddressesComponent implements OnInit {
  @Input() verifiedMacAddress: VerifiedMacAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
