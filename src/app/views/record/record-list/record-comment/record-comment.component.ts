import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';
import {CommentService} from '../../../../services/comment.service';
import {UserService} from '../../../../services/user.service';

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
  commentUsername: string;
  currentUser: string;

  constructor(private sharedService: SharedService,
              private commentService: CommentService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this.currentUser = this.sharedService.user;
    this.commentService.findCommentById(this.commentId)
      .subscribe(
        data => {
          console.log(data);
          this.comment = data;
          this._userService.findUserById(this.comment.userId).subscribe(
            u => {
              this.commentUsername = u.username;
            },
            error => {
              console.log('Error finding the username for this comment!');
            }
          );
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
