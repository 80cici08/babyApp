import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BabyService} from '../../../../services/baby.service';

@Component({
  selector: 'app-babyinfo-edit',
  templateUrl: './babyinfo-edit.component.html',
  styleUrls: ['./babyinfo-edit.component.css']
})
export class BabyinfoEditComponent implements OnInit {

  private _babyId: string;
  private _baby: any;

  constructor(private _activatedRoute: ActivatedRoute,
              private _babyService: BabyService,
              private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        this._babyId = params['bid'];
        this._babyService.findBabyById(this._babyId).subscribe(
          b => {
            this._baby = b;
          },
          error => {
            console.log('Error finding the baby by Id!');
          }
        );
      }
    );
  }

  onEditBabyInfo() {
    this._babyService.updateBaby(this._babyId, this._baby).subscribe(
      updatedBaby => {
        console.log('Baby updated to: ');
        console.log(updatedBaby);
        this._router.navigate(['/baby']);
      },
      error => {
        console.log('Error updating the baby!');
      }
    );
  }
}
