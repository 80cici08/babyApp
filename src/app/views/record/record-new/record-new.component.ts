import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-record-new',
  templateUrl: './record-new.component.html',
  styleUrls: ['./record-new.component.css']
})
export class RecordNewComponent implements OnInit {
  type: String = 'Image';
  latitude: Number;
  longitude: Number;
  locationChosen: Boolean;

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

  public handleAddressChange(address: Address) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.longitude = address.geometry.location.lng();
    this.latitude = address.geometry.location.lat();
    this.locationChosen = true;
  }
}
