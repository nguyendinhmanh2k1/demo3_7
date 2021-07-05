import { Data } from './../MockData';
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
  //Products=Data;
constructor(private http:HttpClient) { }
getProduct():Observable<any>{
return this.http.get<any>(this.api)
}
getProducts(id:any): Observable<any> {
  return this.http.get<product>(`${this.api}/${id}`);
  // return this.products.find(product => product.id == id);
}
addProduct(product:any){
console.log(product);
//  let newObj= {id:6,...product}
// console.log(newObj);

// debugger

 return this.http.post<product>(this.api, product);
}
deleteProduct(id:any): Observable<product>{
  console.log(id);
  return this.http.delete<product>(`${this.api}/${id}`);//(`this.api/id`);
}

updateProduct(product:any):Observable<product>{
  //console.log("1");
  return this.http.put<product>(`${this.api}/${product.id}`, product);//(this.api, product);
}
}
