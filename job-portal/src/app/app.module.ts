import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateJobsComponent } from './admin/create-jobs/create-jobs.component';
import { ListJobsComponent } from './admin/list-jobs/list-jobs.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';
import { DetailsComponent } from './applicants/details/details.component';
import { ApplicantService } from './applicants/applicant.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { StoreModule, Store} from '@ngrx/store';
import { reducers} from './service/store/app.reducer';
import { Material } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeDialogComponent } from './applicants/resume-dialog/resume-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppDataService } from './service/store/app-data.service';
import { ApplicantsModule } from './applicants/applicants.module';
import { AppState } from './service/store/app.state';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { PersistenceModule } from 'angular-persistence';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CreateJobsComponent,
    ListJobsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Material,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot(reducers,{},),
    AppRoutingModule,
    NgbModule,
    PersistenceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { 
  
  constructor(){

  }
}
