import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'BRL' ]: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;

  private timer: any;
  private counter = 0;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) { }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.updateList.push({
        timestamp: this.lastUpdate,
        USD: this.currentPrice.bpi.USD.rate_float,
        BRL: this.currentPrice.bpi.BRL.rate_float,
      });
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
