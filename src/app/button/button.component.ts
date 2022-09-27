import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  allowServerStatusChange:boolean = false;
  isTrying:string = 'is not trying to change status'

  constructor() {
    setTimeout(() => {
      this.allowServerStatusChange = true
    },2000);
   }

  ngOnInit(): void {
  }

  changeServerStatus() {
    this.isTrying = 'is trying to change status'
  }

}
