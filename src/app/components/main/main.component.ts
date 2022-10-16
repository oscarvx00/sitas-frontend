import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  moduleClicked(moduleName : string){
    
    const selectedModule = environment.modules[moduleName]

    console.log(selectedModule)

    if(selectedModule.enabled){
      this.router.navigateByUrl(`/module/${selectedModule.path}`)
    } else {
      this.router.navigateByUrl(`/notenabled`)
    }
  }

  checkUserLogged() : boolean{
    return false
  }

  loginClicked(){
    
  }

  profileClicked() {
    this.router.navigateByUrl(`/me`)
  }

}
