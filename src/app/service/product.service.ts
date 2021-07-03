//import { product } from './../product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './../product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api ="https://60de88fb878c890017fa2f05.mockapi.io/product"
constructor(private http:HttpClient) { }
getProduct():Observable<any>{
return this.http.get<any>(this.api)
}

addProduct(product:any){
console.log(product);
//  let newObj= {id:6,...product}
// console.log(newObj);

// debugger

 return this.http.post<product>(this.api, product);
}
deleteProduct(id:any){
  console.log(id);
  return this.http.delete<product>(this.api, id);
}
}
