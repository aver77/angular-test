import {Component, EventEmitter, Input, Output} from "@angular/core"
import {IProduct, ITodo, IUser} from "../../models";
import { v4 as uuid } from 'uuid';
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../../store/actions/count.actions";
import {setTitle} from "../../store/actions/title.actions";
@Component({
  selector: "app-products",
  template: `
    <div style="width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center">
      <p>Products component:</p>
      <div style="display: flex; gap: 10px; justify-content: space-around; align-items: flex-start; flex-direction: column; width: 400px">
        <div>
          Введите имя пользователя: <input [value]="name" (change)="setInputData($event, 'name')"/>
        </div>
        <div>
          Введите фамилию пользователя: <input [value]="surname" (change)="setInputData($event, 'surname')"/>
        </div>
        <div>
          Введите возраст пользователя: <input [value]="age" (change)="setInputData($event, 'age')" type="number"/>
        </div>
        <button (click)="addUser()">Добавить</button>
      </div>
      <button (click)="increase()">+</button>
      <button (click)="decrease()">-</button>
      <button (click)="reset()">reset</button>
      <div>
        Изменить тайтл: <input [value]="title" (keyup)="setTitle($event)"/>
      </div>
<!--    <div *ngFor="let product of products">-->
<!--      <app-product-->
<!--        [product]="product"-->
<!--      ></app-product>-->
<!--    </div>-->
<!--    <div *ngFor="let todo of todos">-->
<!--      <app-todo-->
<!--        [todo]="todo"-->
<!--      ></app-todo>-->
<!--    </div>-->
        <div *ngFor="let user of users">
          <app-user [user]="user" (setUsers)="setUsersProducts($event)"></app-user>
        </div>
    </div>
  `,
})
export class ProductsComponent {
  console = console
  title: string = "";
  name = ""
  surname = ""
  age = 0
  setInputData(event: Event, inputEntity: string) {
    if (inputEntity === "name") {
      this.name = (event.target as HTMLInputElement).value
    }
    if (inputEntity === "surname") {
      this.surname = (event.target as HTMLInputElement).value
    }
    if (inputEntity === "age") {
      this.age = +(event.target as HTMLInputElement).value
    }
  }
  @Input() products: IProduct[]
  @Input() todos: ITodo[]
  @Input() users: IUser[]
  @Output() setUsers = new EventEmitter();

  constructor(private userService: UserService, private counterStore: Store, private titleStore: Store<{title: string}>) {
    this.titleStore.select("title").subscribe(data => {
      this.title = data;
    })
  }

  increase() {
    this.counterStore.dispatch(increment());
  }
  decrease() {
    this.counterStore.dispatch(decrement());
  }

  setTitle(event: Event) {
    this.titleStore.dispatch(setTitle({title: (event.target as HTMLInputElement).value}))
  }

  reset() {
    this.counterStore.dispatch(reset());
  }

  setUsersProducts(users: IUser[]) {
    this.setUsers.emit(users)
  }

  addUser() {
    const users = this.userService.addUser({
      id: uuid(),
      name: this.name,
      age: this.age,
      surname: this.surname
    })
    this.setUsers.emit(users)
  }

}
