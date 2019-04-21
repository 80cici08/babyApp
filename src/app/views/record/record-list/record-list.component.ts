import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {RecordService} from '../../../services/record.service';
import {SharedService} from '../../../services/shared.service';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  // used only for onAddRecord Method
  latitude: Number;
  longitude: Number;
  records: any;
  user: any;
  comment: String;

  // records: any = [
  //   {
  //     _id: '123', name: 'baby1', type: 'Image', url: 'http://lorempixel.com/400/200/',
  //     latitude: -41, longitude: 40,
  //     comments: [{_id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！'},
  //       {_id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！'}],
  //     thumbUps: ['Mom', 'Dad'],
  //     date: '2019-04-19'
  //   },
  //   {
  //     _id: '234', name: 'baby2', type: 'Video', url: 'https://www.youtube.com/embed/ZwKhufmMxko',
  //     latitude: -41, longitude: 40,
  //     comments: [{_id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！'},
  //       {_id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！'}],
  //     thumbUps: ['Dad', 'Grandma'],
  //     date: '2019-04-19'
  //   },
  // ];

  constructor(private router: Router,
              public sanitizer: DomSanitizer,
              private recordService: RecordService,
              private commentService: CommentService,
              private sharedService: SharedService) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
  }

  ngOnInit() {
    // get current location
    this.user = this.sharedService.user;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      }, err => console.log(err));
    }
    this.recordService.findAllRecords()
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.records = data;
        }
      );
  }

  addThumbUp(recordIndex) {
    let new_thumbUps = [...this.records[recordIndex].thumbUps];
    new_thumbUps.push(this.user.username);
    const recordId = this.records[recordIndex]._id;
    this.records[recordIndex].thumbUps = new_thumbUps;
    this.recordService.updateRecord(recordId, this.records[recordIndex])
      .subscribe(
        (data: any[]) => {
          this.records[recordIndex] = data;
          console.log(data);
        }
      );

  }

  removeThumbUp(recordIndex) {
    const new_thumbUps = [...this.records[recordIndex].thumbUps];
    const index = new_thumbUps.indexOf(this.user.username);
    if (index !== -1) {
      new_thumbUps.splice(index, 1);
    }
    this.records[recordIndex].thumbUps = new_thumbUps;
    const recordId = this.records[recordIndex]._id;
    this.recordService.updateRecord(recordId, this.records[recordIndex])
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.records[recordIndex] = data;
        }
      );
  }

  onAddComment(recordId) {
    // TODO
    console.log(this.comment);
    this.commentService.createComment(recordId, this.comment)
      .subscribe(
        (data: any[]) => {
          console.log(data);
          // this.records = data;
        }
      );
  }

  onAddRecord() {
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
