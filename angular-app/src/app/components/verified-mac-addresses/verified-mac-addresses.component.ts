import {Component, OnInit} from '@angular/core';
import {MacAddressesInfo} from "../../domain/mac-adresses-info";
import {sessionSaver} from "../../services/session-saver.service";
import {MacAddressesDetails} from "../../domain/mac-addresses-details";
import {BlockDetails} from "../../domain/block-details";
import {VendorDetails} from "../../domain/vendor-details";

@Component({
  selector: 'app-verified-mac-addresses',
  templateUrl: './verified-mac-addresses.component.html',
  styleUrls: ['./verified-mac-addresses.component.css']
})
export class VerifiedMacAddressesComponent implements OnInit {
  verifiedMacAddresses: MacAddressesInfo[];
  addressInfo: MacAddressesInfo;
  macAddressDetails: MacAddressesDetails;
  blockDetails: BlockDetails;
  vendorDetails: VendorDetails;

  constructor() { }

  ngOnInit(): void {
    this.verifiedMacAddresses = sessionSaver.getMacAddressesInfo();
  }

  handleShowInfo(address) {
    this.addressInfo = address.info;
    this.macAddressDetails = address.info.macAddressDetails;
    this.blockDetails = address.info.blockDetails;
    this.vendorDetails = address.info.vendorDetails;
  }

}
