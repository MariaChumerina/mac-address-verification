import { VendorDetails } from "./vendor-details";
import { MacAddressDetails } from "./mac-address-details";
import { BlockDetails } from "./block-details";

export interface VerifiedMacAddress {
  vendorDetails: VendorDetails,
  macAddressDetails: MacAddressDetails,
  blockDetails: BlockDetails,
}
