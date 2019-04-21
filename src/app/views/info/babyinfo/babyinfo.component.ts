import {Component, OnInit} from '@angular/core';
import {BabyService} from '../../../services/baby.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-babyinfo',
  templateUrl: './babyinfo.component.html',
  styleUrls: ['./babyinfo.component.css']
})
export class BabyinfoComponent implements OnInit {
  private _babies: any;
  private _role = this._sharedService.user.role;

  private _findAllBabiesError: String;
  private _deleteBabyError: String;

  constructor(private _babyService: BabyService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this._babyService.findAllBabies().subscribe(
      babies => {
        console.log('Got all babies...');
        this._babies = babies;
        this._findAllBabiesError = null;
      },
      error => {
        console.log('Error getting all babies!');
        this._findAllBabiesError = error || 'Error getting all babies!';
      }
    );
  }

  onRemoveBaby(babyId) {
    this._babyService.deleteBaby(babyId).subscribe(
      deletedBaby => {
        console.log('Deleted the babyId: ' + babyId);
        this._deleteBabyError = null;
        for (let i = 0; i < this._babies.length; i++) {
          if (this._babies[i]._id === babyId) {
            this._babies.splice(i, 1);
          }
        }
      },
      error => {
        console.log('Error deleting the baby given Id: ' + babyId);
        this._deleteBabyError = error || 'Error deleting the baby given Id: ' + babyId;
      }
    );
  }

}
