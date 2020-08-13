import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})

export class VerificationComponent implements OnInit {
  macAddress: string;
  @Output() onSubmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


}
