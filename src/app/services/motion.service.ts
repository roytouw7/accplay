import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

export interface Rotation {
  alpha: number;
  beta: number;
  gamma: number;
}

@Injectable({
  providedIn: 'root',
})
export class MotionService {
  private rotationOutput$ = new Subject<Rotation>();

  constructor() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event: any) => {
        const { alpha, beta, gamma } = event;

        this.rotationOutput$.next({ alpha, beta, gamma });
      });
    }
  }

  getRotation(): Observable<Rotation> {
    return this.rotationOutput$.asObservable().pipe(throttleTime(500));
  }
}
