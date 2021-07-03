import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
// import { ProductSercice } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
      ProductListComponent,
      ProductComponent,
      CategoryComponent,
      SlideComponent,
      ProductAddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
