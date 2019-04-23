import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { DetailsComponent } from './details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { MatDialogModule } from '@angular/material';
import { ResumeDialogComponent } from './resume-dialog/resume-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let routes: Routes = [
  { path:'list',component: ListJobsComponent},
  { path:'details/:id', component: DetailsComponent}
];


@NgModule({
  declarations: [ListJobsComponent, DetailsComponent, FilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule
  ],
  exports:[RouterModule, FilterPipe],
  entryComponents:[]
})
export class ApplicantsRoutingModule { }
