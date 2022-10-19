import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private httpClient : HttpClient
  ) { }

  checkUserLogged() : Observable<any> {
    return this.httpClient.get(environment.backendEndpoint + '/me', {
      withCredentials: true
    })
  }
}
