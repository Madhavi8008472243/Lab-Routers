import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';


const routes: Routes = [
  { path : 'productlist/:id', component: ProductdetailComponent},
  { path : '', redirectTo: '/productlist', pathMatch: 'full'},
  { path : 'productlist', component: ProductComponent},
  { path : 'category', component: CategoryComponent},
  { path : '**', component: ProductNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }