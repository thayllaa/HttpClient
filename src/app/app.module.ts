import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { TimerComponent } from './timer/timer.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { TimerService } from './timer.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'thaylla', component: ThayllaComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'task', component: TaskComponent },
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    ThayllaComponent,
    TimerComponent,
    TaskComponent
  ],
  bootstrap: [RootComponent],
  providers: [ TaskService, TimerService ]
})
export class AppModule {}
