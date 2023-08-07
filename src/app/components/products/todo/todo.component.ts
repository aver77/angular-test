import {Component, Input} from "@angular/core"
import {ITodo} from "../../../models";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent {
  @Input() todo: ITodo
}
