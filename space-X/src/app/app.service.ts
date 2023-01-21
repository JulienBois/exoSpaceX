import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(public http : HttpClient) { }

  getCapsules(): Promise<any> {
    return lastValueFrom(this.http.get<any>('https://api.spacexdata.com/v4/capsules'));
  }

  getLaunches(): Promise<any> {
    return lastValueFrom(this.http.get<any>('https://api.spacexdata.com/v4/launches'));
  }
}
