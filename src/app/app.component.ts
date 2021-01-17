import { Component } from '@angular/core';
import { MotionService } from './services/motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accplay';

  constructor(private motionService: MotionService) {}
}
