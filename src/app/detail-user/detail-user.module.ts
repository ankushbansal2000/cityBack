import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailUserRoutingModule } from './detail-user-routing.module';
import { DetailUserComponent } from './detail-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceRecievedComponent } from '../service-recieved/service-recieved.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [DetailUserComponent, ServiceRecievedComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DetailUserRoutingModule
  ]
})
export class DetailUserModule { }
