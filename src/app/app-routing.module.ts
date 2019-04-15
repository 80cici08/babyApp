import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './views/user/login/login.component';
import {SignupComponent} from './views/user/signup/signup.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RecordListComponent} from './views/record/record-list/record-list.component';
import {RecordNewComponent} from './views/record/record-new/record-new.component';
import {RecordEditComponent} from './views/record/record-edit/record-edit.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'record', component: RecordListComponent},
  {path: 'record/new', component: RecordNewComponent},
  {path: 'record/:rid', component: RecordEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
