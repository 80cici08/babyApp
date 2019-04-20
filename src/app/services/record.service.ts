import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  // the URLs to call the http services API
  private _createRecordUrl = '/api/user/';
  private _findAllRecordsForUserUrl = '/api/user/';
  private _findAllRecordsUrl = '/api/records';
  private _findRecordByIdUrl = '/api/record/';
  private _updateRecordUrl = '/api/record/';
  private _deleteRecordUrl = '/api/record/';

  constructor(private _http: HttpClient) {
  }

  // the http CRUD services

  createRecord(userId: string, record: any) {
    const new_record = {
      type: record.type,
      url: record.url,
      name: record.name,
      longitude: record.longitude,
      latitude: record.latitude,
      userId: userId,
      thumbUps: [],
      date: record.date
    };
    return this._http.post<any>(this._createRecordUrl + userId + '/record', new_record);
  }

  findRecordsByUser(userId: string) {
    return this._http.get<any>(this._findAllRecordsForUserUrl + userId + '/record');
  }

  findAllRecords() {
    return this._http.get<any>(this._findAllRecordsUrl);
  }

  findRecordById(recordId: string) {
    return this._http.get<any>(this._findRecordByIdUrl + recordId);
  }

  updateRecord(recordId: string, record: any) {
    return this._http.put<any>(this._updateRecordUrl + recordId, record);
  }

  deleteRecord(recordId: string) {
    return this._http.delete<any>(this._deleteRecordUrl + recordId);
  }

}
