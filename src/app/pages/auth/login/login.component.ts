import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private fb: FormBuilder,
    private appComp: AppComponent
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSignin() {
    if (this.form.invalid) {
      return;
    }

    const emailInput = this.form.get('email')?.value;
    const passwordInput = this.form.get('password')?.value;

    try {
      await this.firebaseService.signin(emailInput, passwordInput);
      if (this.firebaseService.isLoggedIn) {
        this.appComp.isLoggedIn = true;
        this.router.navigate(['home']);
      }
    } catch (error) {
      console.error('Login error:', error);
      // You can display error messages to the user here
    }
  }
}
