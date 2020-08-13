import { Component, Input } from '@angular/core';
import { MacAddressDetails } from "../../domain/mac-address-details";

@Component({
  selector: 'app-mac-addresses-details',
  templateUrl: './mac-addresses-details.component.html',
  styleUrls: ['./mac-addresses-details.component.css']
})
export class MacAddressesDetailsComponent {
  @Input() macAddressDetails: MacAddressDetails;

}
