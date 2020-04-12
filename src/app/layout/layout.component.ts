import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskCode } from '../framework/global';
import { AppEventEmitter } from '../framework/Utils/EventEmitter';
import { CommonServices } from '../framework/common.service';
import { BaseComponent } from '../framework/BaseCompo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCitySelect: boolean;
  isSideBar: boolean;
  cityName : string;
  input: string="input";
  public static routerRef: Router;
  
  constructor(public router : Router, private service: CommonServices) { 
    LayoutComponent.routerRef = this.router;
  }

  ngOnInit(): void {
    this.cityName = localStorage.getItem('city')
    if(localStorage.getItem('city') && localStorage.getItem('token')){
      this.isCitySelect = true;
     this.router.navigate(['/home']);
    }
  }

  updateSideBar(event: AppEventEmitter) {
    
    switch (event.eventData) {
     
      case 1:
        this.isSideBar = true;
        break;
      case 2:
        this.isSideBar = false;  
        break;
      case 3:
        this.isCitySelect = false;
        this.isSideBar = false;
        break;
      case 4:
        this.isCitySelect = true;
        this.router.navigate(['/home']);
        location.reload();
        break;  
      default: 
      console.log(event.eventData);
    }
  }

}
