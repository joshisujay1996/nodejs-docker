import { Component, OnInit, Input, Output, Optional, SkipSelf } from '@angular/core';
import { AppDataService } from '../service/store/app-data.service';
import { TSMap } from 'typescript-map';
import { User } from '../models/user/user.model';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() public signIn:boolean = false;
  map:TSMap<String,Object>;

  constructor(private _appDataService:AppDataService) { 

  }

  ngOnInit() {
    //debugger;
    this.map = this._appDataService.getData();
    //user: User;
    //let user = new User();
    let user = ( this.map != null && this.map.get('user') != null ) ?  Object.assign(new User("",""), this.map.get('user') ) : null;
    console.log(this.map)
    //user = Object.assign(User,user);
    if( user != null && user.email != null){
      
      this.signIn = false;
    }
    else{
      this.signIn = true;
    }
  }

}
