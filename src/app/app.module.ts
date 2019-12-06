import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BookstoreEditComponent } from './Bookstore/bookstore-edit/bookstore-edit.component';
import { BookstoreListComponent } from './Bookstore/bookstore-list/bookstore-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookstoreComponent,
    BookstoreEditComponent,
    BookstoreListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
