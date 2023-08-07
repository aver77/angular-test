import {Component, Input} from "@angular/core"
import {IProduct} from "../../../models";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent {
  console = console

  hidePrice = false
  @Input() product: IProduct
}
