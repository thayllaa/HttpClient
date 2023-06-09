import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { GithubService } from '../github.service';
import { TempBitService } from '../temp-bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
})
export class BitcoinComponent implements OnInit {
  constructor(
    public githubService: GithubService,
    public bitcoinService: BitcoinService,
    public tempbitService: TempBitService
  ) {}

  ngOnInit() {
    this.update();
  }

  autoSaveInterval: number = setInterval(() => this.update(), 60000);

  update() {
    this.bitcoinService.update();
    this.githubService.update();
  }
}
