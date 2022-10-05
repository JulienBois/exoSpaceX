import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  urlCapsules = 'https://api.spacexdata.com/v3/capsules';
  capsules: any;
  constructor(private router:Router, public http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.urlCapsules).subscribe(data => this.capsules = data);
  }

  goToCapsules(){
    this.router.navigate(['/capsules']);
  }

  goToHome(){
    this.router.navigate([''])
  }

}
