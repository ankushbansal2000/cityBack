import { Component, OnInit } from '@angular/core';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonServices } from 'src/app/framework/common.service';
import { TaskCode } from 'src/app/framework/global';
import { Router } from '@angular/router';
import { MasterCategorResponse, MasterCategories } from 'src/app/models/MasterCategoriesResponse';
import { deflate } from 'zlib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
cityName : string;
cityId : number;
noData: boolean;
masterList : Array<MasterCategories>;
  constructor(private service : CommonServices, public router: Router) { super(service); }

  ngOnInit() {
    this.cityName = localStorage.getItem('city');
    this.cityId = +localStorage.getItem('cityId');
    if(this.cityId){
      this.getMasterCategoryDetailById(this.cityId);
    }
  }

  getMasterCategoryDetailById(id: number) {
    this.downloadData(ApiGenerator.getByCityIdMasterCategoryRequest(id));
  }

  selectCategory(name,id) {
    sessionStorage.setItem('categoryName', name);
    sessionStorage.setItem('categoryId', id);
    this.router.navigate(['/detail-user']);
  }
  onResponseReceived(taskCode: TaskCode, response: any) {
    const isSuccess = super.onResponseReceived(taskCode, response);
    if (isSuccess) {
      switch (taskCode) {
        case TaskCode.GET_BY_CITY_ID:
          const masterRes = response as MasterCategorResponse;
          this.masterList = masterRes.response.data;
          break;
      }
    } else {
      this.noData = true;
    }
    return true;
  }

}
