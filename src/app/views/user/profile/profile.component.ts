import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  errorFlag: boolean;
  errorMsg = 'Invalid input, please check!';

  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService,
              private activatedRouter: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { this.errorFlag = false;}

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  onUpdateProfile() {
    if (!!this.profileForm.valid) {
      this.userService.updateUser(this.user._id, this.user)
        .subscribe(
          data => {
            this.user = data;
          },
          error => {
            this.errorFlag = true;
          }
        );
    } else {
      this.errorFlag = true;
    }
  }

}
