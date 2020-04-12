import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppEventEmitter } from 'src/app/framework/Utils/EventEmitter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cityName : string;

  @Output() openSideBar : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.cityName=localStorage.getItem('city');
  }

  isopenSideBar() {
  const emitter = new AppEventEmitter();
  emitter.eventData = 1;
  this.openSideBar.emit(emitter);
}

}
