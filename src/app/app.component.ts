import { Component } from '@angular/core';
import {products} from "./data/products";
import {IProduct, ITodo, IUser} from "./models";
import {TodoService} from "./services/todo.service";
import {UserService} from "./services/user.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: IProduct[] = products;

  users: IUser[] = [];
  todos: ITodo[] = []

  count: number = 0;
  title: string = "";
  constructor(private todoService: TodoService,
              private userService: UserService,
              private counterStore: Store<{count: number}>,
              private titleStore: Store<{title: string}>) {
    this.counterStore.select("count").subscribe(data => {
      this.count = data;
    })
    this.titleStore.select("title").subscribe(data => {
      this.title = data;
    })
  }
  setUsers(users: IUser[]) {
    this.users = users
  }
  async ngOnInit() {
    this.users = this.userService.getUsers();
    this.todos = await this.todoService.fetchAllTodos();
  }

}
