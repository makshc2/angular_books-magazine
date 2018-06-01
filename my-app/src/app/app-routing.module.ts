import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PanelComponent } from "./component/panel/panel.component";
import { AboutComponent } from "./component/about/about.component";
import { AddBookComponent } from "./component/add-book/add-book.component";
import { EditBookComponent } from "./component/edit-book/edit-book.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full', canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panel', component: PanelComponent, canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate:[AuthGuard] },
  { path: 'addbook', component: AddBookComponent, canActivate:[AuthGuard] },
  { path: 'books/:id', component: EditBookComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports:[
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
