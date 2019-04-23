import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { DetailsComponent } from './details/details.component';
import { ApplicantsRoutingModule } from './applicants-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantService } from './applicant.service';
import { FilterPipe } from './filter.pipe';
import { ResumeDialogComponent } from './resume-dialog/resume-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDataService } from '../service/store/app-data.service';





@NgModule({
  declarations: [ResumeDialogComponent],
  imports: [
    
    ApplicantsRoutingModule,
    HttpClientModule
  ],
  providers:[ApplicantsModule,ApplicantService,AppDataService],
  entryComponents: [ResumeDialogComponent]
})
export class ApplicantsModule { }
