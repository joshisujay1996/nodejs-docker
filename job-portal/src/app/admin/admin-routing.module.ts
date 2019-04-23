import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';

const appRoutes: Routes = [
  
  // {
  //   path: 'contacts-add',
  //   component: PostModuleComponent,
  //   data: { title: 'Product Add' }
  // },
  {
    path: 'create',
    component: CreateJobsComponent,
    data: { title: 'Create Jobs' }
  },
  
  {
    path: 'list',
    component: ListJobsComponent,
    data: { title: 'List Jobs' }
  },
  { path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
