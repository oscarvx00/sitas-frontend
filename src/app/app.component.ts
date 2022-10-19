import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sitas';

  isUserLoggedIn! : boolean

  constructor(
    private userService : UserService
  ){
   
  }

  ngOnInit() {
    this.userService.checkUserLogged().subscribe(result => {
      this.userService.isUserLoggedIn.next(true)
    },
      (err : any) => {
        console.error(err.status)
        this.userService.isUserLoggedIn.next(false)
      }
  )}
}
