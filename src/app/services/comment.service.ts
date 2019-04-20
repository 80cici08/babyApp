import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // the http calls URLs
  private _createCommentUrl = '/api/record/';
  private _findAllCommentsForRecordUrl = '/api/record/';
  private _findAllCommentsForUserUrl = '/api/user/';
  private _findCommentByIdUrl = '/api/comment/';
  private _updateCommentUrl = '/api/comment/';
  private _deleteCommentUrl = '/api/comment/';

  constructor(private _http: HttpClient,
              private _sharedService: SharedService) {
  }

  // the http CRUD services

  createComment(recordId: string, comment: any) {
    const new_comment = {
      text: comment,
      userId: this._sharedService.user._id,
      recordId: recordId
    };
    return this._http.post<any>(
      this._createCommentUrl + recordId + '/comment',
      new_comment
    );
  }

  findCommentsByRecordId(recordId: string) {
    return this._http.get<any>(
      this._findAllCommentsForRecordUrl + recordId + '/comment'
    );
  }

  findCommentsByUserId(userId: string) {
    return this._http.get<any>(
      this._findAllCommentsForUserUrl + userId + '/comment'
    );
  }

  findCommentById(commentId: string) {
    return this._http.get<any>(this._findCommentByIdUrl + commentId);
  }

  updateComment(commentId: string, comment: any) {
    return this._http.put<any>(this._updateCommentUrl + commentId, comment);
  }

  deleteComment(commentId: string) {
    return this._http.delete<any>(this._deleteCommentUrl + commentId);
  }

}
