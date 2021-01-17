import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MotionService {
  constructor() {
    if (window.DeviceOrientationEvent) {
      console.log('welp')
      window.addEventListener('devicemotion', (event: any) => console.log(event));
    }
  }
}
