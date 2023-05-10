import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      symbol: string;
      rate_float: number;
    };
    BRL: {
      symbol: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  list: Array<Response> = [];

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.currentPrice = data;
        this.list.push(data);
      });
  }
}
