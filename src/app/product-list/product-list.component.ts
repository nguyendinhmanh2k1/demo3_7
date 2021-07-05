import { getTestBed } from '@angular/core/testing';
// import { ProductSercice } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '../MockData';
import { product } from '../product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = Data;
  selected?: product;
  constructor(
    private productSercice: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  ShowDetail(product:any){
  //console.log(product);
  //this.selected = product;
  }
  getProducts(){
    this.productSercice.getProduct().subscribe(Data=>{
    console.log(Data);
    this.products=Data;
    //console.log(Data);
    })
  }
  deleteProduct(id:any)
  {
    // this.productSercice.deleteProduct(id).subscribe((Data:any)=>{
    // this.products = this.products.filter(product=>product.id=Data.id);
    // })
    this.productSercice.deleteProduct(id).subscribe(response => {
      this.products = this.products.filter(product => product.id != response.id);
    })
   }
}
