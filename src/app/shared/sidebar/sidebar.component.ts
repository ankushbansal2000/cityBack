import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppEventEmitter } from 'src/app/framework/Utils/EventEmitter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeElement: number;
  cityName: string;
  @Output() closeSideBar : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.cityName=localStorage.getItem('city');
  }
  onChangeCity() {
    const emitter = new AppEventEmitter();
    emitter.eventData = 3;
    this.closeSideBar.emit(emitter);
  }

  selectedItem(id: number) {
    this.activeElement = id;
  }

  isCloseSideBar() {
    const emitter = new AppEventEmitter();
    emitter.eventData = 2;
    this.closeSideBar.emit(emitter);
  }

}
