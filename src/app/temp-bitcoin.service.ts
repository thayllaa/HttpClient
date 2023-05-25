import { Injectable } from '@angular/core';

@Injectable()
export class TempBitService {
  constructor() {}

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);
  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }
}
