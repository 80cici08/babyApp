import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../../services/comment.service';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-record-comments',
  templateUrl: './record-comments.component.html',
  styleUrls: ['./record-comments.component.css']
})
export class RecordCommentsComponent implements OnInit {
  @Input() comment_ids: any;
  @Input() record: any;
  private _user: any;

  text: string;

  constructor(private commentService: CommentService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.findUserById(this.record.userId).subscribe(
      user => {
        this._user = user;
      },
      error => {
        console.log('Error finding user!');
      }
    );
  }

  onAddComment() {
    const comment = {
      text: this.text,
      recordId: this.record._id
    };
    console.log(comment);
    this.commentService.createComment(this.record._id, comment)
      .subscribe(
        data => {
          console.log(data);
          this.comment_ids.push(data._id);
        },
        error => {
          console.log(error);
        }
      );
  }

  onDeleteCommentEvent(commentId) {
    for (let i = 0; i < this.comment_ids.length; i++) {
      if (this.comment_ids[i] === commentId) {
        this.comment_ids.splice(i, 1);
      }
    }
  }


}
