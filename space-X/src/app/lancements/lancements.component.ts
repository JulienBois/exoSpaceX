import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService} from "../app.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-lancements',
  templateUrl: './lancements.component.html',
  styleUrls: ['./lancements.component.css']
})
export class LancementsComponent implements OnInit {

  lancements: any;
  constructor(private router:Router, private appService: AppService, private datepipe: DatePipe){

  }

  ngOnInit(): void {
    this.getLaunches();
  }

  async getLaunches(): Promise<any> {
    this.lancements = await this.appService.getLaunches();
    console.log(this.lancements);
    for(let i = 0;this.lancements.length > i;i++){
      this.lancements[i].date_local = this.datepipe.transform(this.lancements[i].date_local as Date, 'dd-MM-yyyy');
    }
  }

}
