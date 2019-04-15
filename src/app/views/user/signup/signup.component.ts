import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  password: String;
  verifyPassword: String;
  value: String = 'other';   // this is the default checked value for the radio buttons
  otherRelation: String;

  errorFlag: boolean;
  errorMsg = 'Passwords are not the same!';


  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  signup() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifyPassword = this.loginForm.value.verifyPassword;
    // this.role = this.loginForm.value.role;
    console.log(this.value);
    if (this.value === 'other') {
      console.log(this.otherRelation);
    }

    if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.errorFlag = false;
      // this.userService.register(this.user.username, this.user.password)
      //   .subscribe((data: any) => {
      //     this.router.navigate(['/profile']);
      //   }, (error: any) => {
      //     this.errorMsg = error._body;
      //   });
      this.router.navigate(['/profile']);
    }

  }
}
