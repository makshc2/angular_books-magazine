import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PanelComponent } from './component/panel/panel.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BooksService } from './services/books.service';
import { IdService } from "./services/id.service";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    EditBookComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [BooksService, IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
