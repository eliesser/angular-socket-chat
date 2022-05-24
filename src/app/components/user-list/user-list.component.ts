import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  activeUsersObs!: Observable<any>;

  constructor(
    private chatService: ChatService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.activeUsersObs = this.chatService.getActiveUsers();

    this.websocketService.getUsers();
  }
}
