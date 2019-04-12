import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicApp';
  artists: any;

  constructor(private _http: HttpClient) {
  }

  login() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    this._http.get('http://localhost:3200/api/artists', httpOptions)
      .subscribe(
      (data: any) => {
        this.artists = data.artists.items;
        console.log(data.artists.items);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
