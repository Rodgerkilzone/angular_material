import { Component } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spacescreens :Array<any>;
  title = 'app works!';
  constructor(private http:Http){
    this.http.get('./data.json')
    .map(response => response.json().screenshots)
    .subscribe(res => this.spacescreens = res );
  }
  
}
