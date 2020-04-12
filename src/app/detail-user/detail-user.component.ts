import { TaskCode } from './../framework/global';
import { ServiceRequest, ServiceRequestResponse } from './../models/ServiceRequestResponse';
import { ApiGenerator } from './../framework/ApiGenerator';
import { CommonServices } from './../framework/common.service';
import { BaseComponent } from './../framework/BaseCompo';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormControl, Validators, NgForm} from '@angular/forms';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent extends BaseComponent implements OnInit {
  serviceDetail= {} as ServiceRequest;
  categoryName: string;
  ifServiceRecieved: boolean;
  countryValue : string = '+91';
  constructor(public location: Location, private service: CommonServices ) { super(service); }
  name = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required,  Validators.pattern('[0-9]{10,14}') ]);
  ngOnInit() {
  this.categoryName=sessionStorage.getItem('categoryName');
  }

  goBack(){
    this.location.back();
  }

  save(form : NgForm) {
    var x = /[0-9]{10,14}/;
    if (this.name.value == "" || this.mobile.value == '' || !x.test(this.mobile.value)) {
      alert(' Please enter Name and Mobile Number')
    } else {
    this.serviceDetail.cityId = +localStorage.getItem('cityId');
    this.serviceDetail.categoryId = sessionStorage.getItem('categoryId');
    this.serviceDetail.userId = '3';
    this.serviceDetail.name = this.name.value;
    this.serviceDetail.mobile = this.countryValue + '' +this.mobile.value;
    this.downloadData(ApiGenerator.postServiceRequest(this.serviceDetail));
   this.ifServiceRecieved =true;
  }
  }
  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.POST_SERVICE_REQUEST:
          const Res = response as ServiceRequestResponse;
          this.ifServiceRecieved =true;
          break;
      }
    }
    return true;
  }

}
