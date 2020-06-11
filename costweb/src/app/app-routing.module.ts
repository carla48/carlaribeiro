import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCostComponent} from "./cost/add-cost/add-cost.component";
import {ListCostComponent} from "./cost/list-cost/list-cost.component";

const routes: Routes = [
  { path: 'add-cost', component: AddCostComponent },
  { path: 'list-cost', component: ListCostComponent },
  { path : '', component : ListCostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
