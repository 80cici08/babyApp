import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  // the http REST call urls
  private _findBabyByIdUrl = '/api/baby/';
  private _findAllBabiesUrl = '/api/babies';
  private _updateBabyUrl = '/api/baby/';
  private _deleteBabyUrl = '/api/baby/';
  private _createBabyUrl = '/api/baby';

  constructor(private _http: HttpClient) {
  }

  // the http call on CRUD services
  createBaby(baby: any) {
    const new_baby = {
      name: baby.name,
      gender: baby.gender,
      birthday: baby.birthday,
      weight: baby.weight,
      height: baby.height
    };
    return this._http.post<any>(this._createBabyUrl, new_baby);
  }

  findAllBabies() {
    return this._http.get<any>(this._findAllBabiesUrl);
  }

  findBabyById(babyId: string) {
    return this._http.get<any>(this._findBabyByIdUrl + babyId);
  }

  updateBaby(babyId: string, baby: any) {
    console.log('Updated the baby to: ' + JSON.stringify(baby));
    return this._http.put<any>(this._updateBabyUrl + babyId, baby);
  }

  deleteBaby(babyId: string) {
    console.log('Deleting the baby with Id: ' + babyId);
    return this._http.delete<any>(this._deleteBabyUrl + babyId);
  }
}
