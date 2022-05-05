import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

declare var SockJS :any;
declare var Stomp : any;
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public messages : any[];

  public stompClient : any;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    /**
     * Create a SockJS server with created back-end endpoint called /chat-websocket and added it over Stomp.
     */
    const serverUrl = 'http://localhost:8080/chat-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    /**
     * Connect stomp client and subscribe asynchronously to the chat message-handling Controller endpoint and push any message body into the messages array
     */
    this.stompClient.connect({}, function() {
      that.stompClient.subscribe('/chat/messages', (message:any) => {
        if (message.body) {
          let obj = JSON.parse(message.body);
          that.addMessage(obj.text, obj.username, obj.avatar);
        }
      });
    });
  }

  // Prepare and push the chat messages into the messages array
  addMessage(message: any, username: string, avatar: string) {
    this.messages.push({
      text: message,
      date: new Date(),
      user: {
        name: username,
        avatar: avatar
      }
    });
  }

  // Send a chat message using stomp client
  sendMessage(msg: Message) {
    this.stompClient.send('/app/sendmsg', {}, JSON.stringify(msg));
  }
}