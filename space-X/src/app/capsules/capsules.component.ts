import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService} from "../app.service";
import {async} from "rxjs";


@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  capsules: any;
  constructor(private router:Router, public http : HttpClient, private appService: AppService) { }

  ngOnInit(): void {
    this.getCapsules();
  }

  async getCapsules() {
    this.capsules = await this.appService.getCapsules();
    console.log(this.capsules);
  }

}
