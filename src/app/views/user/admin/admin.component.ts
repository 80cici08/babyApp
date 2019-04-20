import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any = [{_id: '123', username: 'Alice', role: 'Mom', roleName: 'Mom'},
    {_id: '123', username: 'Tom', role: 'Dad', roleName: 'Dad'}]

  constructor() { }

  ngOnInit() {
  }

  onDeleteUser(userId) {
    // TODO
    console.log('delete user...');
  }

}
