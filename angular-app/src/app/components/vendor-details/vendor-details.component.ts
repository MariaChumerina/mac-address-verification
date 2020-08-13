import { Component, Input, OnInit } from '@angular/core';
import { VendorDetails } from "../../domain/vendor-details";

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  @Input() vendorDetails: VendorDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
