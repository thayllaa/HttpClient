import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'thaylla', component: ThayllaComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'bitcoin', component: BitcoinComponent}
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    ThayllaComponent,
    TimerComponent,
    BitcoinComponent
  ],
  bootstrap: [RootComponent],
  providers: [ BitcoinService, TimerService ]
})
export class AppModule {}
