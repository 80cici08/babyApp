import {Component, OnInit} from '@angular/core';
import {BabyService} from '../../../../services/baby.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-babyinfo-new',
  templateUrl: './babyinfo-new.component.html',
  styleUrls: ['./babyinfo-new.component.css']
})
export class BabyinfoNewComponent implements OnInit {

  private _baby: Object = {
    name: '',
    gender: '',
    birthday: '',
    weight: '',
    height: ''
  };

  constructor(private _babyService: BabyService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  onCreateBabyInfo() {
    this._babyService.createBaby(this._baby).subscribe(
      postedBaby => {
        console.log('Created a new baby: ');
        console.log(this._baby);
        this._router.navigate(['/baby']);
      },
      error => {
        console.log('Error creating the new baby!');
      }
    );
  }

}
