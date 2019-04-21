import { Component, OnInit } from '@angular/core';
import {RecordService} from '../../../services/record.service';

@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
export class FootprintComponent implements OnInit {
  latitude: Number;
  longitude: Number;
  records: any;

  constructor(private recordService: RecordService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        console.log(data.coords);
      }, err => console.log(err));
    }
  }

  ngOnInit() {
    this.recordService.findAllRecords()
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.records = data;
        }
      );
  }

}
