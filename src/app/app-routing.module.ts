import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { DetailUserModule } from './detail-user/detail-user.module';


const routes: Routes = [
  {
    path: '' , loadChildren: () => LayoutModule
  },
  {
    path : 'detail-user' , loadChildren: () => DetailUserModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
