import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SongItem } from 'src/app/models/song-item.model';
import { RequestService } from 'src/app/services/request/request.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @ViewChildren('listItem') listItems : QueryList<ElementRef>

  focusOnLastFlag = false
  discardCheckUserLogged = true

  data : SongItem[] = [
    {
      name : ''
    }
  ]

  constructor(
    private requestService : RequestService,
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.checkUserLogged()
  }

  remove(index : number){
    if(this.data.length > 1){
      this.data.splice(index,1)
    }
  }

  async checkUserLogged(){
    this.userService.isUserLoggedIn.subscribe(value => {
      console.log(value)
      //The first time returns false, may be a bug
      if(this.discardCheckUserLogged){
        this.discardCheckUserLogged = false
      } else {
        if(!value){
          this.router.navigateByUrl(`/login`)
        }
      }
    })
  }

  addRow(event : any, index : number){
    event.preventDefault()
    this.data[index].name = event.target.innerText

    if(index == this.data.length - 1 && this.data[index].name != '') {
      this.data.push({
        name : ''
      })
      this.focusOnLastFlag = true
    }
  }

  focusOnLast(){
    if(this.focusOnLastFlag){
      this.listItems.last.nativeElement.firstElementChild.focus()
      this.focusOnLastFlag = false
    }
  }
  
  downloadClicked(){
    if(this.data.filter(it => it.name && it.name.trim()).length == 0){
      alert("No data intoduced")
      return
    }

    this.requestService.sendRequest(
      this.data.filter(it => it.name).map(it => it.name)
    ).subscribe(
      (res : any) => {
        this.goToDownloadClicked()
      },
      (err : any) => {
        console.error(err)
      }
    )
  }

  goToDownloadClicked(){
    this.router.navigateByUrl('/download')
  }

}
