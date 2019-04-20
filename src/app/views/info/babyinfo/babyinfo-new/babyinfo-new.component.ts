import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-babyinfo-new',
  templateUrl: './babyinfo-new.component.html',
  styleUrls: ['./babyinfo-new.component.css']
})
export class BabyinfoNewComponent implements OnInit {
  // TODO
  baby: Object = {_id:'888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70};

  constructor() { }

  ngOnInit() {
  }

  onCreateBabyInfo() {
    console.log(this.baby);
  }

}
