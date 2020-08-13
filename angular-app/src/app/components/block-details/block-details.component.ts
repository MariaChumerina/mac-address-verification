import { Component, Input } from '@angular/core';
import { BlockDetails } from "../../domain/block-details";

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent {
  @Input() blockDetails: BlockDetails;

}
