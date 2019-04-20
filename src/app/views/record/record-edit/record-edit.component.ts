import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {MapsAPILoader} from '@agm/core';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../../services/shared.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecordService} from '../../../services/record.service';

// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {

  // record file upload limiter
  private _maxSize = 1000000000; // size limit 1000MB
  private _allowedType = /jpeg|png|gif|jpg|tiff|avi|mp4|mov|rmvb/; // allowed image and video types

  baseUrl = environment.baseUrl;
  record: any;
  userId: string;
  recordId: string;
  locationChosen: Boolean;

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  // @ViewChild('uploadRecordForm') uploadRecordForm: NgForm;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private recordService: RecordService) {
    this.locationChosen = false;
    this.record = {name: '', type: 'Image', url: '', latitude: '', longitude: '', date: ''};
  }


  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.activatedRoute.params.subscribe(params => {
      this.recordId = params.rid;
    });
    this.recordService.findRecordById(this.recordId)
      .subscribe(
        (data: any) => {
          this.record = data;
          console.log(this.record);
        }
      );
  }

  onChoseLocation(event) {
    this.record.latitude = event.coords.lat;
    this.record.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  handleAddressChange(address: Address) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.record.longitude = address.geometry.location.lng();
    this.record.latitude = address.geometry.location.lat();
    this.locationChosen = true;
  }

  onEditRecord() {
    this.recordService.updateRecord(this.recordId, this.record)
      .subscribe(
        data => {
          this.router.navigate(['/record']);
        },
        error => {
          console.log(error);
        }
      );
  }

  onDeleteRecord() {
    console.log(this.recordId);
    this.recordService.deleteRecord(this.recordId)
      .subscribe(
        data => {
          this.router.navigate(['/record']);
        },
        error => {
          console.log(error);
        }
      );
  }

  // onUploadRecordFile() {
  //   this.recordService.findRecordById(this.recordId).subscribe(
  //     r => {
  //       this.record = r;
  //     },
  //     error => {
  //       console.log('Error finding the record after uploading a record!');
  //     }
  //   );
  // }

}
