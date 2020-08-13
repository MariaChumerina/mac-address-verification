import { Component, Input } from '@angular/core';
import { MacAddressDetails } from "../../domain/mac-address-details";

@Component({
  selector: 'app-mac-address-details',
  templateUrl: './mac-address-details.component.html',
  styleUrls: ['./mac-address-details.component.css']
})
export class MacAddressDetailsComponent {
  @Input() macAddressDetails: MacAddressDetails;

}
