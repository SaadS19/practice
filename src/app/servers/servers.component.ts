import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus='No server wass created';
  serverName='TestServer';
  serverCreated=false;

  servers=['TestServer','TestServer 2'];

  constructor(){

    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  onCreateServer(){
    this.serverCreated=true; 
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created Name is '+ this.serverName;
  }    
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
