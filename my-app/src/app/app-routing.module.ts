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
import { ClientHomeComponent } from "./component/client-home/client-home.component";
import { ClientComponent } from "./component/client/client.component";
import { OrdersComponent } from "./component/orders/orders.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ClientHomeComponent, canActivate:[AuthGuard] },
  { path: 'checkout', component: ClientComponent, canActivate:[AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate:[AuthGuard] },
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
