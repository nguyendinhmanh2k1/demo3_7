//import { ProductService } from './../service/product.service';
//import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from './../product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  Product: product = new product();
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.Product).subscribe((data:any) =>{
     window.location.reload()
   },(error)=>{});
  }

// addProduct(){
//   this.productService.addProduct(this.Product).subscribe((data:any) =>{
//     console.log(data)
//     let newObj = {...this.Product}
//     this.Product=data
//  },(error)=>{});;
//   console.log(this.Product);
// }

}
