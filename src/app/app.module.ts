import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {StoreModule} from "@ngrx/store"
import countReducer from "./store/reducers/count.reducer";
import titleReducer from "./store/reducers/title.reducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from "./components/products/products.component";
import {ProductComponent} from "./components/products/product/product.component";
import {TodoComponent} from "./components/products/todo/todo.component";
import {UserComponent} from "./components/products/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({count: countReducer, title: titleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
