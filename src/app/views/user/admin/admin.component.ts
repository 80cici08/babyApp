import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {CommentService} from '../../../services/comment.service';
import {RecordService} from '../../../services/record.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private _users: any;
  private _commentsDict: { [id: string]: number } = {};
  private _thumbUpsDict: { [id: string]: number } = {};

  constructor(private _userService: UserService,
              private _commentService: CommentService,
              private _recordService: RecordService) {
  }

  ngOnInit() {
    this._userService.findAllUsers().subscribe(
      users => {
        console.log('Found all users for the admin purpose...');
        this._users = users;
        for (let i = 0; i < users.length; i++) {
          this._commentsDict[users[i]._id.toString()] = 0;
          this._thumbUpsDict[users[i].username] = 0;
        }
        console.log(this._commentsDict);
        this._commentService.findAllComments().subscribe(
          comments => {
            console.log('Done finding all comments for admin purpose.');
            for (let i = 0; i < comments.length; i++) {
              const c = comments[i];
              this._commentsDict[c.userId.toString()] += 1;
            }
            this._recordService.findAllRecords().subscribe(
              records => {
                console.log('Done finding all records for admin purpose.');
                for (let i = 0; i < records.length; i++) {
                  const r = records[i];
                  for (let j = 0; j < r.thumbUps.length; j++) {
                    this._thumbUpsDict[r.thumbUps[j]] += 1;
                  }
                }
              },
              error => {
                console.log('Error finding all records for admin purpose.');
              }
            );
          },
          error => {
            console.log('Error finding all comments for admin purpose!');
          }
        );
      },
      error => {
        console.log('Error finding all users!');
      }
    );
  }

  onDeleteUser(userId) {
    this._userService.deleteUser(userId).subscribe(
      deletedUser => {
        console.log('Deleted the user: ');
        console.log(deletedUser);
        for (let i = 0; i < this._users.length; i++) {
          if (this._users[i]._id === userId) {
            this._users.splice(i, 1);
          }
        }
      },
      error => {
        console.log('Error deleting the user!');
      }
    );
  }

}
