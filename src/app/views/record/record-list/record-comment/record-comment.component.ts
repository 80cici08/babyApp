import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-record-comment',
  templateUrl: './record-comment.component.html',
  styleUrls: ['./record-comment.component.css']
})
export class RecordCommentComponent implements OnInit {
  @Input() comment: { _id: string, username: string, text: string };

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteComment() {
    console.log('delete comment...');
  }
}
