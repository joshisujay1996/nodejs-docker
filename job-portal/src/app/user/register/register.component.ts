import { Component, OnInit, Optional, SkipSelf, Input } from '@angular/core';
import { AppDataService } from 'src/app/service/store/app-data.service';
import { HttpService } from 'src/app/service/http/http.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { Observable } from 'rxjs';
import { NavigatorService } from 'src/app/service/navigation/navigator.service';
import { TSMap } from 'typescript-map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //registerForm: FormGroup;
  @Input() data: TSMap<String,Object>;
  registerForm = new FormGroup({
    username: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required)
  });
  constructor( private _appDataService: AppDataService, private httpSevice: HttpService, private navigation: NavigatorService) { 
  }

  ngOnInit() {
    
  }
  
  register = () => {
    let username: string = (this.registerForm.controls.username.value === undefined || this.registerForm.controls.username.value === '')? null : this.registerForm.controls.username.value;
    let password: string = (this.registerForm.controls.password.value === undefined || this.registerForm.controls.password.value === '')? null : this.registerForm.controls.password.value;
    let user = new User(username,password);
    let observableUser:Observable<any> = this.httpSevice.signUp(user);
    observableUser.subscribe( (response) => {
      //user = new User(response.email,null);
      //this.storeService.saveUser(user);
      if(response.success){
        let user = new User(username,null);
          //this.data.set("user",user);
          this._appDataService.setMap("user",user)
          this._appDataService.saveData();
      }
    },() => {},() =>{
      this.data = this._appDataService.getData();
    if(this.data.get('url') === undefined){
      this._appDataService.setMap("url","home");
      this._appDataService.saveData();
      this.data = this._appDataService.getData();
    }
    this.navigation.navigate(this.data.get("url").toString());
    });
  }
}
