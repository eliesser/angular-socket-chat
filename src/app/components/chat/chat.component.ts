import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  text: string = '';
  messageSuscription: Subscription = new Subscription();
  messages: any[] = [];
  element: any;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.element = document.getElementById('chat-messages');

    this.messageSuscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        this.messages.push(msg);

        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy() {
    this.messageSuscription.unsubscribe();
  }

  sendMessage(form: HTMLFormElement) {
    if (!this.text || this.text.length === 0) return;

    this.chatService.sendMessage(this.text);

    form.reset();
  }
}
