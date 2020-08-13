import { VendorDetails } from "./vendor-details";
import { MacAddressesDetails } from "./mac-addresses-details";
import { BlockDetails } from "./block-details";

export interface VerifiedMacAddress {
  vendorDetails: VendorDetails,
  macAddressDetails: MacAddressesDetails,
  blockDetails: BlockDetails,
}