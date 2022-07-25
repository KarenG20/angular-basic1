import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AccounterModule } from './accounter/accounter.module';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
