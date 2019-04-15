import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BabyApp';
  // lat: Number = 51.678418;
  // lng: Number = 7.809007;

  constructor(private _http: HttpClient) {
  }

}
