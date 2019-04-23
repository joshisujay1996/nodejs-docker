import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicantService } from '../applicant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from 'src/app/service/store/app-data.service';

@Component({
  selector: 'app-resume-dialog',
  templateUrl: './resume-dialog.component.html',
  styleUrls: ['./resume-dialog.component.scss']
})
export class ResumeDialogComponent implements OnInit {

  // variable to hold the file uploaded
  fileToUpload: File = null;
  apiComp1 = 'http://localhost:5500/';
  apiComp2 = 'http://localhost:5600/';
  email: string;

  constructor(private http: HttpClient, public rest:ApplicantService , private route: ActivatedRoute,private router: Router, public appService:AppDataService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  onUpload(){
    //this.jobs = [];
    this.email = ((this.appService.getData()).get("user"))["email"];
    console.log(localStorage.getItem("jobid"));
    
    this.rest.getJobs().subscribe((data: {}) => {

      console.log(data[0].indexOf(localStorage.getItem("id")));
      // get the id from the local storage check to which company it belongs and send the resume to that particular company server
      if(data[0]._id == (localStorage.getItem("id"))){
        
        console.log(data[0]);
        // Code to send the resume to company servers 
        const resume = new FormData();
        resume.append('resume',this.fileToUpload,this.fileToUpload.name);
        resume.append('email',this.email.trim());
        resume.append('jobid',localStorage.getItem("jobid").trim());
        resume.append('jobtitle',localStorage.getItem("jobtitle").trim());
        resume.append('username',"sujay");
        console.log(resume);
        this.http.post(this.apiComp1+'api/candidates',resume)
        .subscribe(res => {
          console.log(res);
        });
      }
      if (data[1]._id == (localStorage.getItem("id"))){

        console.log(data[1]);
        // Code to send the resume to company servers
        const resume = new FormData();
        resume.append('resume',this.fileToUpload,this.fileToUpload.name);
        resume.append('email',this.email.trim());
        resume.append('jobid',localStorage.getItem("jobid").trim());
        resume.append('jobtitle',localStorage.getItem("jobtitle").trim());
        resume.append('username',"sujay");
        console.log(resume);
        this.http.post(this.apiComp2+'api/candidates',resume)
        .subscribe(res => {
          console.log(res);
        });
      }
    });


  
  }
  
}
