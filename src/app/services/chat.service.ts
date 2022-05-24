import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public websocketService: WebsocketService) {}

  sendMessage(message: string) {
    let user = <User>this.websocketService.user;
    const payload = {
      from: user.name,
      body: message,
    };

    this.websocketService.emit('message', payload);
  }

  getMessages() {
    return this.websocketService.listen('new-message');
  }

  getMessagesPrivate() {
    return this.websocketService.listen('mesage-private');
  }

  getActiveUsers() {
    return this.websocketService.listen('active-users');
  }
}
