import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
