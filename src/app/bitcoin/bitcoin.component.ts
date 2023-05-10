import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor( public githubService: GithubService,
    public bitcoinService: BitcoinService
  ) {}

  ngOnInit() {
    this.update();
  }

  update() {
    this.bitcoinService.update();
  }

  getBitcoinRates() {
    return this.bitcoinService.currentPrice;
  }
}