import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesModule } from '@parvathyg/services';
import { NavModule } from '@parvathyg/nav';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
