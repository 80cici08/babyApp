import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './views/user/login/login.component';
import {SignupComponent} from './views/user/signup/signup.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RecordListComponent} from './views/record/record-list/record-list.component';
import {RecordEditComponent} from './views/record/record-edit/record-edit.component';
import {BabyinfoComponent} from './views/info/babyinfo/babyinfo.component';
import {AdminComponent} from './views/user/admin/admin.component';
import {FootprintComponent} from './views/info/footprint/footprint.component';
import {BabyinfoEditComponent} from './views/info/babyinfo/babyinfo-edit/babyinfo-edit.component';
import {BabyinfoNewComponent} from './views/info/babyinfo/babyinfo-new/babyinfo-new.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'record', component: RecordListComponent, canActivate: [AuthGuard]},
  {path: 'record/:rid', component: RecordEditComponent, canActivate: [AuthGuard]},
  {path: 'baby', component: BabyinfoComponent, canActivate: [AuthGuard]},
  {path: 'baby/new', component: BabyinfoNewComponent, canActivate: [AuthGuard]},
  {path: 'baby/:bid', component: BabyinfoEditComponent, canActivate: [AuthGuard]},
  {path: 'footprint', component: FootprintComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true}), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
