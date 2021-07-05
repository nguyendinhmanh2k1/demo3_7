import { Data } from './../MockData';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { product } from './../product';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
//import { log } from 'console';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  Product?: product;
  //Product: product = new product();
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private router: Router

    //private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct(){
    // this.route.params.subscribe(param =>{
    // this.productService.getProduct().subscribe(Data=>this.Product=Data);
    // })

    this.route.params.subscribe(param => {
      //console.log(param);
    //this.productService.getProducts(param.id).subscribe(Data => this.Product = Data);
    this.productService.getProducts(param.id).subscribe(Data => this.Product = Data);
    })
  }
  updateProduct(){
    //console.log('1');
    this.productService.updateProduct(this.Product).subscribe(Data => {
      this.router.navigateByUrl("/product")
    });
  }
}
