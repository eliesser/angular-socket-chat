import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  user: any;
  constructor(public websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.user = <User>this.websocketService.user;
  }

  onLoguot() {
    this.websocketService.logoutWs();
  }
}
