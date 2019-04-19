import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
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

  constructor(private router: Router,private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log('init');
  }

  addThumbUp(recordIndex) {
    console.log(this.records[recordIndex].thumbUps);
    this.records[recordIndex].thumbUps.push('Mom');
    console.log(this.records[recordIndex].thumbUps);
    this.router.navigate(['/record']);
  }

  removeThumbUp(recordIndex) {
    console.log(this.records[recordIndex].thumbUps);
    const index = this.records[recordIndex].thumbUps.indexOf('Mom');
    if (index !== -1) {
      this.records[recordIndex].thumbUps.splice(index, 1);
    }
    console.log(this.records[recordIndex].thumbUps);
    this.router.navigate(['/record']);
  }

  onAddComment() {
    console.log("add comment");
  }


}
