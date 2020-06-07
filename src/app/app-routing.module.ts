import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveindiaComponent } from './giveindia/giveindia.component';


const routes: Routes = [
  {path:"", component:GiveindiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
