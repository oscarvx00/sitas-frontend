import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-not-enabled',
  templateUrl: './module-not-enabled.component.html',
  styleUrls: ['./module-not-enabled.component.scss']
})
export class ModuleNotEnabledComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  returnClicked(){
    this.location.back()
  }

}
