import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router:Router) { }

  navigate = (url:string) => {
    console.log("nav");
    this.router.navigate([url]);
  }
  
}
