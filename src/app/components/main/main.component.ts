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

  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

  moduleClicked(moduleName : string){
    
    const selectedModule = environment.modules[moduleName]

    if(selectedModule.enabled){
      if(this.checkUserLogged()){
        this.router.navigateByUrl(`/module/${selectedModule.path}`)
      } else {
        this.loginClicked()
      }
    } else {
      this.router.navigateByUrl(`/notenabled`)
    }
  }

  checkUserLogged() : boolean {
    return false
  }

  loginClicked(){
    this.router.navigateByUrl(`/login`)
    //this.userService.check().subscribe(result => console.log(result))
  }

  profileClicked(){
    this.router.navigateByUrl(`/me`) 
  }

}
