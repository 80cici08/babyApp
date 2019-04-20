import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../../services/comment.service';

@Component({
  selector: 'app-record-comments',
  templateUrl: './record-comments.component.html',
  styleUrls: ['./record-comments.component.css']
})
export class RecordCommentsComponent implements OnInit {
  @Input() comments: [{ _id: string, username: string, text: string, recordId: string }];
  @Input() recordId: string;

  text: string;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
  }

  onAddComment() {
    const comment = {
      text: this.text,
      recordId: this.recordId
    };
    console.log(comment);
    this.commentService.createComment(this.recordId, comment)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }


}
