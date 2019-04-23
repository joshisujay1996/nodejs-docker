// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {AuthGuardService} from './service/user/auth-guard.service';
// import { LoginComponent } from './user/login/login.component';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { RegisterComponent } from './user/register/register.component';
// import { ApplicantsModule } from './applicants/applicants.module';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CreateJobsComponent } from './admin/create-jobs/create-jobs.component';
// import { ListJobsComponent } from './applicants/list-jobs/list-jobs.component';
// let routes: Routes = [
//   /*{
//   //path:"",
//   //component:HomeComponent
// }*/
// {
//   path:'contact',
//   component:ContactComponent
//  },
//  {
//     path:'user',
//     component: LoginComponent,
//     canActivateChild:[AuthGuardService],
//     children:[
//    {
//      path:'createjobs',
//      component:CreateJobsComponent
//     //loadChildren:'./admin/admin.module#AdminModule'
//    },{
//     path:'listjobs',
//     component:ListJobsComponent
//    },
//    /*{
//     path:'log',
//      loadChildren:'./applicants/applicants.module#ApplicantsModule'
//    },*/
//    {
//      path:'logout',
//      component: HomeComponent
//    }
//   ]
//  },
// {
//   path:'home',
//   component:HomeComponent
// },
// {
//   path:'register',
//   component:RegisterComponent
// }
// ,
// {
//   path:'applicants',
//   loadChildren:'./applicants/applicants.module#ApplicantsModule'
// },
// {
//   path:'**',
//   component:PageNotFoundComponent
// }
// ];
 
// @NgModule({
//   imports: [RouterModule.forRoot(routes),ApplicantsModule],
//   //providers:[AppDataService],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './service/user/auth-guard.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './user/register/register.component';
import { ApplicantsModule } from './applicants/applicants.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateJobsComponent } from './admin/create-jobs/create-jobs.component';
import { ListJobsComponent } from './applicants/list-jobs/list-jobs.component';
let routes: Routes = [
  /*{
  //path:"",
  //component:HomeComponent
}*/
{
  path:'contact',
  component:ContactComponent
 },
 {
    path:'user',
    component: LoginComponent,
    canActivateChild:[AuthGuardService],
    children:[
   
   /*{
    path:'log',
     loadChildren:'./applicants/applicants.module#ApplicantsModule'
   },*/
   {
     path:'logout',
     component: HomeComponent
   }
  ]
 },
{
  path:'home',
  component:HomeComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'listjobs',
  component:ListJobsComponent
 },
 {
  path:'createjobs',
  component:CreateJobsComponent
 //loadChildren:'./admin/admin.module#AdminModule'
},
{
  path:'applicants',
  loadChildren:'./applicants/applicants.module#ApplicantsModule'
},
{
  path:'**',
  component:PageNotFoundComponent
}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes),ApplicantsModule],
  //providers:[AppDataService],
  exports: [RouterModule]
})
export class AppRoutingModule { }