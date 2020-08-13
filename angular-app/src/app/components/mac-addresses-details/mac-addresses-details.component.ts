import {Component, Input, OnInit} from '@angular/core';
import { MacAddressesDetails } from "../../domain/mac-addresses-details";

@Component({
  selector: 'app-mac-addresses-details',
  templateUrl: './mac-addresses-details.component.html',
  styleUrls: ['./mac-addresses-details.component.css']
})
export class MacAddressesDetailsComponent implements OnInit {
  @Input() macAddressesDetails: MacAddressesDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
