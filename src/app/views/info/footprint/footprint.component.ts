import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
export class FootprintComponent implements OnInit {
  latitude: Number;
  longitude: Number;

  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        console.log(data.coords);
      }, err => console.log(err));
    }
  }

  ngOnInit() {
  }

}
