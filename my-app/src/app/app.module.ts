import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { PanelComponent } from './component/panel/panel.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

import { environment } from "../environments/environment";
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CurrencyComponent } from './component/currency/currency.component';
import { CurrencyService } from './services/currency.service';
import { BasketComponent } from './component/basket/basket.component';
import { ClientHomeComponent } from './component/client-home/client-home.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { AuthService } from "./services/auth.service";
import { BooksService } from './services/books.service';
import { IdService } from "./services/id.service";
import { BasketService } from "./services/basket.service";
import { ClientComponent } from './component/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    EditBookComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CustomDatePipe,
    CurrencyComponent,
    BasketComponent,
    ClientHomeComponent,
    ClientComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [BooksService, IdService, AuthService, CurrencyService, BasketService],
  bootstrap: [AppComponent],
  exports: [CurrencyComponent]
})

export class AppModule { }
