import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsComponent} from "./components/goods/goods.component";
import {ItemsComponent} from "./components/items/items.component";

const routes: Routes = [
  {
    path: "goods", component: GoodsComponent,
  },
  {
    path: "items", component: ItemsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
