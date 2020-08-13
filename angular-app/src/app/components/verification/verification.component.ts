import {Component, EventEmitter, Output} from '@angular/core';
import {ValueFormInput} from "../../domain/value-form-input";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
})

export class VerificationComponent {
  macAddress: string;
  error: string;
  @Output() checkMacAddress = new EventEmitter()

  handleSubmit(valueFormInput: ValueFormInput): void {
    const macAddress = valueFormInput.macAddress;
    const regExp = new RegExp(/^((([a-fA-F0-9][a-fA-F0-9]+[-]){5}|([a-fA-F0-9][a-fA-F0-9]+[:]){5})([a-fA-F0-9][a-fA-F0-9])$)|(^([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]+[.]){2}([a-fA-F0-9][a-fA-F0-9][a-fA-F0-9][a-fA-F0-9]))$/);
    if (!macAddress) {
      this.error = 'пожалуйста, введите mac-адрес';
    } else if (macAddress.match(regExp)) {
      this.checkMacAddress.emit(macAddress);
      this.error = '';
    } else {
      this.error = 'mac-адрес не соответствует формату';
    }
  }


}
