import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data:  any) => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log('logout fail...');
          console.log(error);
        }
      );
  }

}
