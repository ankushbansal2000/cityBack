import { Component, OnInit, Output, Input } from '@angular/core';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonServices } from 'src/app/framework/common.service';
import { TaskCode } from 'src/app/framework/global';
import { CityDetailResponse, CityDetail } from 'src/app/models/CityResponse';
import { Router } from '@angular/router';
import { LoginDetail, LoginDetailsResponse } from 'src/app/models/LoginResponse';
import { Location } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { AppEventEmitter } from 'src/app/framework/Utils/EventEmitter';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent extends BaseComponent implements OnInit {
  citylist: CityDetail[];
  cityDetail: Array<CityDetail>;
  loginDetail= {} as LoginDetail;
  @Input() changeCity : string;
  @Output() citySelect : EventEmitter<any> = new EventEmitter<any>();
  constructor(private service: CommonServices, public router: Router, public location : Location) {super(service); }
  
  ngOnInit(): void {
    this.openModal();
    this.getAllCity();
  }

  openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  getAllCity() {
    this.downloadData(ApiGenerator.getAllCity());
  }

  closeModel(cityName, cityId) {
    localStorage.setItem('city', cityName);
    localStorage.setItem('cityId', cityId);
    this.loginDetail.deviceToken = cityName;
    this.onLogin(this.loginDetail);
  }
  modelClose() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
   if(this.changeCity) {
        const emitter = new AppEventEmitter();
   emitter.eventData = 4;
   this.citySelect.emit(emitter);
   } else {
    this.router.navigate(['/home']);
   }

  }

  onLogin(loginDetail: LoginDetail) {
    this.downloadData(ApiGenerator.postLoginApi(loginDetail));
  }


  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_ALL_CITY:
          const cityRes = response as CityDetailResponse;
          this.cityDetail = cityRes.response.data;
          break;
        case TaskCode.GET_LOGIN_URL:
            let loginresponse = response as LoginDetailsResponse;
            localStorage.setItem('token', loginresponse.response.data.token);
            this.modelClose();
      }
    }
    return true;
  }


}
