import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MotionService {
  constructor() {
    if (window.DeviceOrientationEvent) {
      console.log('updated 2.0')
      window.addEventListener('devicemotion', (event: any) => console.log(event));
    }
  }
}
