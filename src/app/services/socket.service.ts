import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {io} from 'socket.io-client';
import { Rotation } from './motion.service';

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
  sendMessage(msg: Rotation): void {
    console.log('sending');
    this.socket.emit('rotation', { message: msg });
  }

  getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }
}
