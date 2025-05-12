import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserData } from '../user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '../../shared/pipe/title-case.pipe';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TitleCasePipe,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnChanges {
  public userData: UserData | null = null;
  public restroData: any;
  public name = new FormControl('');
public pageTitle = 'Product details'
  constructor(public productService: ProductService) {
  }

  ngOnChanges() {

  }

  ngOnInit(){
    this.name.valueChanges.pipe().subscribe(((value)=> {
      console.log(value);
    }))

    this.getUserDetails();
  }

  getUserDetails() {
    this.productService.getUserDetails().subscribe((res: any) => {
      this.userData = res;
    });
  }
}
