import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusBarComponent } from './navbar/status-bar.component';
import { HomeComponent } from './home/home.component';
import { PozivComponent } from './poziv/poziv.component';
import { PozivUTijekuComponent } from './poziv-u-tijeku/poziv-u-tijeku.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    HomeComponent,
    PozivComponent,
    PozivUTijekuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
