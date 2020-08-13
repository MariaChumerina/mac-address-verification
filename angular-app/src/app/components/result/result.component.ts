import {Component, Input, OnInit} from '@angular/core';
import { VerifiedMacAddress } from "../../domain/verified-mac-address";
import {MacAddressesDetails} from "../../domain/mac-addresses-details";
import {VendorDetails} from "../../domain/vendor-details";
import {BlockDetails} from "../../domain/block-details";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  macAddressesDetails: MacAddressesDetails;
  vendorDetails: VendorDetails;
  blockDetails: BlockDetails;

  @Input()
  set verifiedMacAddress(verifiedMacAddress: VerifiedMacAddress) {
    this.macAddressesDetails = verifiedMacAddress.macAddressDetails;
    this.vendorDetails = verifiedMacAddress.vendorDetails;
    this.blockDetails = verifiedMacAddress.blockDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
