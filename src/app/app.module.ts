import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatSelectModule} from '@angular/material';
import {NgxMdModule} from 'ngx-md';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    NgxMdModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxMdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
