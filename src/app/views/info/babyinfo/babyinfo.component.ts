import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babyinfo',
  templateUrl: './babyinfo.component.html',
  styleUrls: ['./babyinfo.component.css']
})
export class BabyinfoComponent implements OnInit {

  babys = [{_id:'888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70},
    {_id:'888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70}];

  constructor() { }

  ngOnInit() {
  }

  onRemoveBaby() {
    // TODO
    console.log('remove baby...');
  }

}
