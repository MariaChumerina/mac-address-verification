import { Component, OnInit, Input } from '@angular/core';
import { BlockDetails } from "../../domain/block-details";

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {
  @Input() blockDetails: BlockDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
