import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {MapsAPILoader} from '@agm/core';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {
  baseUrl = environment.baseUrl;
  userId: String = '123';
  recordId: String = '123';
  name: String;
  type: String = 'Image';
  url: String;
  latitude: Number;
  longitude: Number;
  locationChosen: Boolean;
  date: String = new Date().toISOString().substr(0, 10);

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.locationChosen = false;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      }, err => console.log(err));
    }
  }

  ngOnInit() {
  }

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  handleAddressChange(address: Address) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.longitude = address.geometry.location.lng();
    this.latitude = address.geometry.location.lat();
    this.locationChosen = true;
  }

  onEditRecord() {
    console.log(this.name);
    console.log(this.url);
    console.log(this.type);
    console.log(this.latitude);
    console.log(this.date);
  }

}
