import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  macAddress: string;

  constructor(private http: HttpClient){ }

  getData(macAddress){
    return this.http.get(`https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=${macAddress}`);
  }
}
