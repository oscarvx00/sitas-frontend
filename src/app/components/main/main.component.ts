
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userLogged : boolean = false

  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.checkUserLogged()
  }

  moduleClicked(moduleName : string){
    
    const selectedModule = environment.modules[moduleName]

    if(selectedModule.enabled){
      if(this.userLogged){
        this.router.navigateByUrl(`/module/${selectedModule.path}`)
      } else {
        this.loginClicked()
      }
    } else {
      this.router.navigateByUrl(`/notenabled`)
    }
  }

  async checkUserLogged(){
    this.userService.isUserLoggedIn.subscribe(value => {
      this.userLogged = value
    })
  }

  loginClicked(){
    this.router.navigateByUrl(`/login`)
    
  }

  profileClicked(){
    this.router.navigateByUrl(`/me`) 
  }
}