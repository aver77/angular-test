import {Component, Input} from "@angular/core"
import {IProduct} from "../../models";

@Component({
  selector: "app-product",
  template: `
    <p>Product component</p>
    <div *ngFor="let item of products; let i = index">
      <p>Name: {{item.name}}</p>
      <p>Type: {{item.type}}</p>
      <button (click)="showPrice=true">Show price</button>
      <p *ngIf></p>
    </div>
  `,
})
export class ProductComponent {
  console = console

  showPriceById() {

  }
  @Input() products: IProduct[]
}
