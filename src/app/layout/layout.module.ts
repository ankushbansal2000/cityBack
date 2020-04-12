import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CityComponent } from './city/city.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [LayoutComponent, CityComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
