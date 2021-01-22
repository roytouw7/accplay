import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnDestroy {

  private socket: any;
  private message$ = new Subject<string>();

  readonly server = 'https://cryptic-escarpment-20633.herokuapp.com';
  readonly local = 'http://localhost:3000';
  constructor() {
    this.socket = io(`${this.server}`);

    this.socket.on('chat message', (msg: string) => {
      console.log(`received message ${JSON.stringify(msg)}`);
    });

  }

  ngOnDestroy(): void {
    this.message$.complete();
  }

  // EMITTER
  sendMessage(msg: string): void {
    console.log('sending');
    this.socket.emit('chat message', { message: msg });
  }

  getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }
}
