import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  public restaurants= [];
  
  constructor(public productService: ProductService) {

  }

  ngOnInit(){
    this.getRestaurants();
  }
  getRestaurants() {
    this.productService.getAll().subscribe(res => {
      console.log(res);
      this.restaurants = res
    });
  }
}
