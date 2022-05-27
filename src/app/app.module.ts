import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AttrDirective } from './attr-directive.directive';
import { LocateCurrencyPipe } from './locateCurrency.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttrDirective,
    LocateCurrencyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
