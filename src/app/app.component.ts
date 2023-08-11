import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });

    if (localStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  handleLogout(){
    this.isLoggedIn = false;
  }
}
