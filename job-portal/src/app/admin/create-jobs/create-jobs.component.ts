import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.css']
})
export class CreateJobsComponent implements OnInit {

  @Input() jobData = {title:'', description:'', location: '', type:'' };
  constructor() { }

  ngOnInit() {
  }

}
