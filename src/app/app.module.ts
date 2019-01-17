import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';

import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { CommandPaletComponent } from './command-palet/command-palet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TableComponent,
    CommandPaletComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    HttpService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
