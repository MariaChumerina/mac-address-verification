import { Component, Input } from '@angular/core';
import { VerifiedMacAddress } from "../../domain/verified-mac-address";
import { MacAddressDetails } from "../../domain/mac-address-details";
import { VendorDetails } from "../../domain/vendor-details";
import { BlockDetails } from "../../domain/block-details";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  macAddressDetails: MacAddressDetails;
  vendorDetails: VendorDetails;
  blockDetails: BlockDetails;

  @Input()
  set verifiedMacAddress(verifiedMacAddress: VerifiedMacAddress) {
    this.macAddressDetails = verifiedMacAddress.macAddressDetails;
    this.vendorDetails = verifiedMacAddress.vendorDetails;
    this.blockDetails = verifiedMacAddress.blockDetails;
  }

}
