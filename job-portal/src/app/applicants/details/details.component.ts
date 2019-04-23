import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ResumeDialogComponent } from '../resume-dialog/resume-dialog.component';
import { empty } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { AppDataService } from 'src/app/service/store/app-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  job;
  constructor(public rest:ApplicantService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog, public appService:AppDataService) { }

  ngOnInit() {
    // call get method to fetch the jobs according to the id and display the details
    this.rest.getJob(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data[0]);
      if(Object.entries(data[0]).length==0){
        this.job = data[1];
        console.log(typeof(data[1]));
      }
      else
      this.job = data[0];
      
      // this.job = data[1];
    });
  }

  //id = this.job.id;

  // Open the dialog box to upload a file
  openDialog(id): void {
    console.log(localStorage.getItem("id"));
    console.log(((this.appService.getData()).get("user"))["email"]);
    const dialogRef = this.dialog.open(ResumeDialogComponent, {
        
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   //this.animal = result;
    // });
  }
  
}
