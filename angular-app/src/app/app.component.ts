import { Component } from '@angular/core';
import { HttpService } from "./services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
export class AppComponent {
  title = 'Проверка mac-адресов';

}
