import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-X';
  lancements: any;
  urlLaunches = 'https://api.spacexdata.com/v3/launches';
  constructor(private router:Router, public http : HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any>(this.urlLaunches).subscribe(data => this.lancements = data);
  }

    goToCapsules(){
      this.router.navigate(['/capsules']);
    }

    goToHome(){
      this.router.navigate([''])
    }
    

}


