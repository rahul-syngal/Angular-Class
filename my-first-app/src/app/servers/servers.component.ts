import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'hello world';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  showDetails = false;
  buttonClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
}
