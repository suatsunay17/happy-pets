import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['',[Validators.required]],
    password:[],
  })
  constructor(
    public firebaseService: FirebaseService,
    private appComp: AppComponent,
    private router:Router,
    private fb:FormBuilder
  ) {}
  async onSignin(emailInput:string,passwordInput:string) {
    await this.firebaseService.signin(emailInput, passwordInput);
    if (this.firebaseService.isLoggedIn) {
      this.appComp.isLoggedIn = true;
    }
    this.router.navigate(['home']);
  }
}
