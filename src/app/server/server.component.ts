import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 30;
    serverStatus: string = 'on';
    allowServerStatusChange:boolean = false;
    isTrying:string = 'is not trying to change status';
    serverName:string = '';
    userName:string = 'test';

  constructor() {
    setTimeout(() => {
      this.allowServerStatusChange = true
    },2000);
   }

   changeServerStatus() {
    if(this.isTrying === `is trying to change status ${this.serverName}`){
        this.isTrying = 'is not trying to change status'
    } else {
        this.isTrying = `is trying to change status ${this.serverName}`
    }
  }
    getServerStatus() {
        return this.serverStatus;
    }

};