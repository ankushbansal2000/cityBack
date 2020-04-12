import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {
    path: '' , component : LayoutComponent, 
    children : [
      {
        path : 'home' , loadChildren: () => HomeModule
      }
    ]
  },
  {
    path: 'city' , component: CityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
