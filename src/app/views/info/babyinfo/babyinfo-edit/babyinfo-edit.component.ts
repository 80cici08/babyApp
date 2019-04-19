import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babyinfo-edit',
  templateUrl: './babyinfo-edit.component.html',
  styleUrls: ['./babyinfo-edit.component.css']
})
export class BabyinfoEditComponent implements OnInit {

  // TODO
  baby: Object = {_id:'888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70};

  constructor() { }

  ngOnInit() {
  }

  onUpdateBaby() {
    // TODO
    console.log('update baby');
    console.log(this.baby);
  }
}
