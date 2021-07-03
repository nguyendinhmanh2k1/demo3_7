import { ProductAddComponent } from './product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: 'product',component:ProductListComponent},
  // { path: '',   redirectTo: '/list', pathMatch: 'full' },
  // {path: 'list', component:ProductListComponent},
  // {path: 'add', component:ProductAddComponent}
  {path: 'add',component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
