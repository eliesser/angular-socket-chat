import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  public user: User | null = null;

  constructor(private socket: Socket, private router: Router) {
    this.loadStorage();
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.loadStorage();
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: (resp: any) => void) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  loginWS(name: string) {
    return new Promise<void>((resolve, reject) => {
      this.emit('config-user', { name }, (resp: any) => {
        this.user = new User(name);

        this.saveStorage();

        resolve();
      });
    });
  }

  logoutWs() {
    this.user = null;
    localStorage.removeItem('user');

    this.emit('config-user', { name: 'no-name' }, () => {});

    this.router.navigateByUrl('/');
  }

  userExist() {
    return localStorage.getItem('user') ? true : false;
  }

  saveStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage() {
    let user = localStorage.getItem('user');

    if (user) {
      this.user = new User(JSON.parse(user).name);
      this.loginWS(this.user.name);
    }
  }

  getUsers() {
    this.emit('get-users');
  }
}
