import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './views/user/login/login.component';
import { SignupComponent } from './views/user/signup/signup.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RecordListComponent } from './views/record/record-list/record-list.component';
import { RecordEditComponent } from './views/record/record-edit/record-edit.component';

import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from './views/common/header/header.component';
import { FooterComponent } from './views/common/footer/footer.component';
import { BabyinfoComponent } from './views/info/babyinfo/babyinfo.component';
import { AdminComponent } from './views/user/admin/admin.component';

import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import { FootprintComponent } from './views/info/footprint/footprint.component';
import { RecordCommentComponent } from './views/record/record-list/record-comment/record-comment.component';
import { BabyinfoNewComponent } from './views/info/babyinfo/babyinfo-new/babyinfo-new.component';
import { BabyinfoEditComponent } from './views/info/babyinfo/babyinfo-edit/babyinfo-edit.component';
import { RecordCommentsComponent } from './views/record/record-list/record-comments/record-comments.component';
import { FileInputValidator } from './shared/file-input.validator';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RecordListComponent,
    RecordEditComponent,
    HeaderComponent,
    FooterComponent,
    BabyinfoComponent,
    AdminComponent,
    FootprintComponent,
    RecordCommentComponent,
    BabyinfoNewComponent,
    BabyinfoEditComponent,
    RecordCommentsComponent,
    FileInputValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDaeHXUOXFH5oc2l0pqYOT2CeWsjUv_PSU'
    }),
    FormsModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
