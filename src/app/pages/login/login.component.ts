import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: string = '';

  constructor(
    private websocketService: WebsocketService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.websocketService
      .loginWS(this.name)
      .then(() => {
        this.name = '';
        this.router.navigate(['/messages']);
      })
      .catch(() => {});
  }
}
