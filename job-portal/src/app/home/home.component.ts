import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppDataService } from '../service/store/app-data.service';
import { TSMap } from 'typescript-map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class HomeComponent implements OnInit {

  
  constructor(config: NgbCarouselConfig) { 
     // customize default values of carousels used by this component tree
     config.interval = 2000;
     config.wrap = true;
     config.keyboard = false;
     config.pauseOnHover = false;
  }

  ngOnInit() {
  }


}
