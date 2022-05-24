import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: { transports: ['websocket'] },
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    UserListComponent,
    LoginComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
