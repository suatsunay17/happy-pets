import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'Royal Canin',
    price: 15,
    category: 'food',
    description: 'best food',
    image: 'https://via.placeholder.com/150',
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
