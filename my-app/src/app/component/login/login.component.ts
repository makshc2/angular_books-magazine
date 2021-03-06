import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password:string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.checkAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/panel']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(user => {
        this.router.navigate(['/panel']);
        if(user) {
          this.flashMessage.show('Login success', {
            cssClass: 'alert-success',
            showCloseBtn: true,
            closeOnClick: true,
            timeOut: 4000
          });
        }
      })
      .catch(err=> {
        console.log(err);
        if(err) {
          this.flashMessage.show(err , {
            cssClass: 'alert-danger',
            showCloseBtn: true,
            closeOnClick: true,
            timeOut: 4000
          });
        }
      })
  }

}
