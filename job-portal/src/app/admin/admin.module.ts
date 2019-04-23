import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
//import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateJobsComponent,
    ListJobsComponent
  ],
  imports: [
  BrowserModule,
  //AppRoutingModule,
  AdminRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AdminModule { }
