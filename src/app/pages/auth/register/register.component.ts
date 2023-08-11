import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required]],
    pass: this.fb.group(
      {
        password: [],
        rePassword: [],
      },
      {
        validators: [sameValueGroupValidator('password', 'rePassword')],
      }
    ),
  });
  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private appComp: AppComponent,
    private router: Router
  ) {}
  async onSignup(emailSignup: string, passwordSignup: string) {
    await this.firebaseService.signup(emailSignup, passwordSignup);
    if (this.firebaseService.isLoggedIn) {
      this.appComp.isLoggedIn = true;
    }
    this.router.navigate(['home']);
  }
}
