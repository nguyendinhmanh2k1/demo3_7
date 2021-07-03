import { Component, OnInit } from '@angular/core';
import { product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Product : product = {
  //   price : "$50",
  //   productContent: "Content holder",
  //   img: 'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
  //   status: true
  // }
  // changeStatus(){
  //   this.Product.status = false;
  // }
}
