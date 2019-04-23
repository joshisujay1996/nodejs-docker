import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AppDataService} from '../store/app-data.service';
import { NavigatorService } from '../navigation/navigator.service';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild{
  
  user: User;
  flag:boolean;
  
  constructor(private router:NavigatorService, private _appDataService: AppDataService){
   
  }
  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    
    if(url === 'user/logout'){
      console.log("checklogin" + url);
      let user = new User(null,null);
      this._appDataService.clearData("user",user);
      console.log("logout");
      this.router.navigate('home');
      this.flag = true;
    }
    let data = this._appDataService.getData();
    if(data.get('user') === undefined){
    this.router.navigate('jobPortal');
      this.flag = false;
    }
    else{
      this.flag = true;
    }
    this._appDataService.setMap('url',url)
    this._appDataService.saveData();
    //console.log("flag");
    //console.log(this.flag);
    return this.flag;
  }
}
