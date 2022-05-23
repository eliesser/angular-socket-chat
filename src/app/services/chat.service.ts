import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public websocketService: WebsocketService) { }

  sendMessage(message: string){
    const payload = {
      from: 'Eliesser',
      body: message
    }

    this.websocketService.emit('message', payload);
  }

  getMessages(){
    return this.websocketService.listen('new-message');
  }
}
