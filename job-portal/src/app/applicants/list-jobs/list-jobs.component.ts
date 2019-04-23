import { Component, OnInit, Input } from '@angular/core';


import {Observable,fromEvent} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from '../applicant.service';
import {FilterPipe} from './../filter.pipe';



@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  

  jobs:any = []; // Jobs array as place holder to iterate
  searctText: string;

  // Declare variables for services and roues for applicants
  constructor(public rest:ApplicantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.getJobsComp1();
    // this.getJobsComp2();
    this.getJobs();
  }


  // Get Jobs method to get all jobs from companies
  getJobs(){
    this.jobs = [];
    this.rest.getJobs().subscribe((data: {}) => {
     console.log(typeof(data[0]));
      this.jobs = data[0].concat(data[1]);
      console.log(this.jobs);
    });
  }

  //set the id value in local storage
  setItem(id, jobid, jobtitle){
    localStorage.setItem("id",id);
    localStorage.setItem("jobid",jobid);
    localStorage.setItem("jobtitle",jobtitle);
  }

  


  // // get jobs method to fetch all the jobs from the companies
  // getJobsComp1() {
  //   this.jobs = [];
  //   this.rest.getJobsComp1().subscribe((data: {}) => {
  //    // console.log(dataList[0]);
  //     this.jobs = data;
  //     console.log(this.jobs);
  //   });
  // }

  // getJobsComp2() {
  //   this.jobs = [];
  //   this.rest.getJobsComp2().subscribe((data: {}) => {
  //     console.log(data);
  //     this.jobs = data;
  //     console.log(this.jobs);
  //   });

  }





