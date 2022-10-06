import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lancements',
  templateUrl: './lancements.component.html',
  styleUrls: ['./lancements.component.css']
})
export class LancementsComponent implements OnInit {

  lancements: any;
  urlLaunches = 'https://api.spacexdata.com/v3/launches';
  constructor(private router:Router, public http : HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any>(this.urlLaunches).subscribe(data => this.lancements = data);
  }

    


}
