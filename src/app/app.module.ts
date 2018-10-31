import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import { ShowComponent } from './show/show.component';
import { ShowCardComponent } from './show/show-card/show-card.component';
import {AppRoutingModule} from './app-routing.module';
import {ShowService} from './show/show.service ';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowComponent,
    ShowCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataStorageService, ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
