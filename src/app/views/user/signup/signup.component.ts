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
  username: string;
  password: String;
  verifyPassword: String;
  role: String = 'Other';   // this is the default checked value for the radio buttons
  roleName: String;
  user: any;

  errorFlag: boolean;
  errorMsg = 'Passwords are not the same!';

  private _dulicateUsernameErrorFlag = false;
  private _duplicateRegisterErrorMsg =
    'The username has been registered, please try with another one.';

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


    if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      const roleNameTemp = this.role === 'Other' ? this.roleName : this.role;

      // first, check if the username has been registered before
      this.userService.findUserByUsername(this.username).subscribe(
        name => {
          if (name === null) {
            this._dulicateUsernameErrorFlag = false;
            console.log('Username is valid! Proceed with registration process.');
            // second call register if username is valid
            this.userService.register(this.username, this.password, this.role, roleNameTemp)
              .subscribe((data: any) => {
                this.sharedService.user = data;
                this.router.navigate(['/record']);
              }, (error: any) => {
                this.errorMsg = error._body;
              });
          } else {
            // third show error on view if username is taken already
            this._dulicateUsernameErrorFlag = true;
            console.log('Username has been registered!');
          }
        }
      );
    }
  }
}
