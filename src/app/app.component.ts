import { Component } from '@angular/core';

import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'base';

  constructor(
    public websocketService: WebsocketService
  ) {}

  ngOnInit() {
  }
}
