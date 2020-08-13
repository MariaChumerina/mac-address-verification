import { Component, Input } from '@angular/core';
import { MacAddressesDetails } from "../../domain/mac-addresses-details";

@Component({
  selector: 'app-mac-addresses-details',
  templateUrl: './mac-addresses-details.component.html',
  styleUrls: ['./mac-addresses-details.component.css']
})
export class MacAddressesDetailsComponent {
  @Input() macAddressesDetails: MacAddressesDetails;

}
