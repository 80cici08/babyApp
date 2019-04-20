import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  password: String;
  verifyPassword: String;
  role: String = 'Other';   // this is the default checked value for the radio buttons
  roleName: String;
  user: any;

  errorFlag: boolean;
  errorMsg = 'Passwords are not the same!';

  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  signup() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifyPassword = this.loginForm.value.verifyPassword;
    this.role = this.loginForm.value.role;

    if (this.role !== 'Other') {
      this.roleName = this.role;
    }

    if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      this.user = {
        username: this.username,
        password: this.password,
        role: this.role,
        roleName: this.roleName
      }
      this.user = this.userService.createUser(this.user);

      // 这句最后要去掉，在Loggedin中实现
      // TODO
      this.sharedService.user = this.user;
      // this.userService.register(this.user.username, this.user.password)
      //   .subscribe((data: any) => {
      //     this.router.navigate(['/profile']);
      //   }, (error: any) => {
      //     this.errorMsg = error._body;
      //   });
      this.router.navigate(['/record']);
    }

  }
}
