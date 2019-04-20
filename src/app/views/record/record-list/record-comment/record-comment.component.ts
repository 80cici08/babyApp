import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';
import {CommentService} from '../../../../services/comment.service';

@Component({
  selector: 'app-record-comment',
  templateUrl: './record-comment.component.html',
  styleUrls: ['./record-comment.component.css']
})
export class RecordCommentComponent implements OnInit {
  // @Input() comment: { _id: string, username: string, text: string, recordId: string};
  @Input() commentId: string;
  @Input() user: any;
  @Output() deleteCommentEvent = new EventEmitter();
  comment: any;

  constructor(private sharedService: SharedService,
              private commentService: CommentService) {
  }

  ngOnInit() {
    console.log(this.commentId);
    this.commentService.findCommentById(this.commentId)
      .subscribe(
        data => {
          console.log(data);
          this.comment = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  onDeleteComment() {
    this.deleteCommentEvent.emit(this.commentId);
    this.commentService.deleteComment(this.comment._id)
      .subscribe(
        data => {
          console.log(data);
          this.comment = null;
        },
        error => {
          console.log(error);
        }
      );
  }

}
