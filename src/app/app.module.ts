import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttrDirective } from './attr-directive.directive';
import { LocateCurrencyPipe } from './locateCurrency.pipe';
import { TimerService } from './timer.service';
import { DOCUMENT, SET_INTERVAL } from './token';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttrDirective,
    LocateCurrencyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document,
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
