import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  loginWithProvider(providerName : string){
    window.open(environment.backendEndpoint + `/oauth2/authorization/${providerName}`, "_self")
  }

}
