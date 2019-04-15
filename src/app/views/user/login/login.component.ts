import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.router.navigate(['/profile']);

    // this.userService.login(this.username, this.password).subscribe((data: any) => {
    //   this.errorFlag = false;
    //   this.sharedService.user = data;
    //   this.router.navigate(['/profile']);
    // }, (error: any) => {
    //   this.errorFlag = true;
    //   console.log(error);
    // });
  }

}
