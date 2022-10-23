import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SongItem } from 'src/app/models/song-item.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @ViewChildren('listItem') listItems : QueryList<ElementRef>

  focusOnLastFlag = false

  data : SongItem[] = [
    {
      name : 'TEST1'
    },
    {
      name : 'TEEEST'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  remove(index : number){
    this.data.splice(index,1)
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
    
  }

}
