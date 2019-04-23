import { Component } from '@angular/core';
import { AppDataService } from './service/store/app-data.service';
import { Store } from '@ngrx/store';
import { AppState } from './service/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job-portal';
}
