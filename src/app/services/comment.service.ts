import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // the http calls URLs
  private _createCommentUrl = '/api/record/';
  private _findAllCommentsForRecordUrl = '/api/record/';
  private _findAllCommentsForUserUrl = '/api/record/';
  private _findCommentByIdUrl = '/api/comment/';
  private _updateCommentUrl = '/api/comment/';
  private _deleteCommentUrl = '/api/comment/';

  constructor(private _http: HttpClient) {
  }

  // the http CRUD services

  createComment(recordId: string, comment: any) {
    return this._http.post<any>(
      this._createCommentUrl + recordId + '/comment',
      comment
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
