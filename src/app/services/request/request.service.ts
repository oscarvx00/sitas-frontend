import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient : HttpClient
  ) { }


  sendRequest(songNames : string[]) : Observable<any> {
    return this.httpClient.post(environment.backendEndpoint + '/request',
    songNames,
    {
      withCredentials: true
    }
    )
  }
}
