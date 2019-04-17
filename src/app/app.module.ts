import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './views/user/login/login.component';
import { SignupComponent } from './views/user/signup/signup.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RecordListComponent } from './views/record/record-list/record-list.component';
import { RecordNewComponent } from './views/record/record-new/record-new.component';
import { RecordEditComponent } from './views/record/record-edit/record-edit.component';

import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from './views/common/header/header.component';
import { FooterComponent } from './views/common/footer/footer.component';
import { BabyinfoComponent } from './views/info/babyinfo/babyinfo.component';
import { FollowersinfoComponent } from './views/info/followersinfo/followersinfo.component';
import { AdminComponent } from './views/user/admin/admin.component';

import {GooglePlaceModule} from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RecordListComponent,
    RecordNewComponent,
    RecordEditComponent,
    HeaderComponent,
    FooterComponent,
    BabyinfoComponent,
    FollowersinfoComponent,
    AdminComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
