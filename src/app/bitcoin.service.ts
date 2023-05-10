import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string
  }
  bpi: {
    USD: {
      symbol: string,
      rate_float: number
    };
    BRL: {
      symbol: string,
      rate_float: number
    };
  }
}

@Injectable()
export class BitcoinService {
  current: Response;
  list: Array<Response> = [];

  private timer: any;
  private counter = 0;

  constructor(private http: HttpClient) {}

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.current = data;
      this.list.push(data);
    });
  }

  myTimer(ms: number) {
    if (!this.timer) {
      this.counter = 60;
      this.timer = this.counter - 1;
      if (this.counter == 60) {
        return this.update();
      }
    }
  }

  getTimer() {
    return this.counter;
  }
}