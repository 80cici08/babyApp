import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {RecordService} from '../../../services/record.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  //used only for onAddRecord Method
  latitude: Number;
  longitude: Number;

  records: any = [
    {
      _id: '123', name: 'baby1', type: 'Image', url: 'http://lorempixel.com/400/200/',
      latitude: -41, longitude: 40,
      comments: [{_id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！'},
        {_id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！'}],
      thumbUps: ['Mom', 'Dad'],
      date: '2019-04-19'
    },
    {
      _id: '234', name: 'baby2', type: 'Video', url: 'https://www.youtube.com/embed/ZwKhufmMxko',
      latitude: -41, longitude: 40,
      comments: [{_id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！'},
        {_id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！'}],
      thumbUps: ['Dad', 'Grandma'],
      date: '2019-04-19'
    },
  ];

  constructor(private router: Router,
              public sanitizer: DomSanitizer,
              private recordService: RecordService,
              private sharedService: SharedService) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
  }

  ngOnInit() {
    // 1. get current location, used only for onAddRecord Method
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      }, err => console.log(err));
    }
  }

  addThumbUp(recordIndex) {
    // console.log(this.records[recordIndex].thumbUps);
    this.records[recordIndex].thumbUps = ['Dad', 'Grandma', 'Mom'];
    // console.log(this.records[recordIndex].thumbUps);
    // this.router.navigate(['/record']);
  }

  removeThumbUp(recordIndex) {
    console.log(this.records[recordIndex].thumbUps);
    const index = this.records[recordIndex].thumbUps.indexOf('Mom');
    if (index !== -1) {
      this.records[recordIndex].thumbUps.splice(index, 1);
    }
    console.log(this.records[recordIndex].thumbUps);
    // this.router.navigate(['/record']);
  }

  onAddComment() {
    // TODO
    console.log('add comment');
  }

  onAddRecord() {
    // TODO 需要把name置为空
    const new_record = {
      'type': 'Image',
      'latitude': this.latitude,
      'longitude': this.longitude,
      'date': new Date().toISOString().substr(0, 10),
    };
    this.recordService.createRecord(this.sharedService.user._id, new_record)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/record', data._id]);
        },
        error => {
          console.log(error);
        }
      );
  }


}
