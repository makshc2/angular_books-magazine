import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PanelComponent } from "./component/panel/panel.component";
import { AboutComponent } from "./component/about/about.component";
import { AddBookComponent } from "./component/add-book/add-book.component";
import { EditBookComponent } from "./component/edit-book/edit-book.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
  { path: 'about', component: AboutComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'books/:id', component: EditBookComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
