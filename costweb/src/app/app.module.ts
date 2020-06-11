import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostComponent } from './cost/cost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCostComponent } from './cost/list-cost/list-cost.component';
import { AddCostComponent } from './cost/add-cost/add-cost.component';
import { GetCostComponent } from './cost/get-cost/get-cost.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HttpClientModule} from "@angular/common/http";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    CostComponent,
    ListCostComponent,
    AddCostComponent,
    GetCostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
