import { Component } from '@angular/core';
import { MotionService } from './services/motion.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accplay';

  constructor(private motionService: MotionService, private socketService: SocketService) {
    socketService.getMessage$().subscribe(console.log);
    setInterval(() => {
      this.socketService.sendMessage('Hello World');
    }, 2000);
  }
}
