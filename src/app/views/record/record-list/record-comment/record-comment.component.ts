import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-record-comment',
  templateUrl: './record-comment.component.html',
  styleUrls: ['./record-comment.component.css']
})
export class RecordCommentComponent implements OnInit {
  @Input() comments: [{ _id: String, username: string, text: string, recordId: string}];

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  onDeleteComment() {
    console.log('delete comment...');
  }

}
