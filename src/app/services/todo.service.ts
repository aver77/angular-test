import {Injectable} from "@angular/core";
import axios from "axios";
import {ITodo} from "../models";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {
  }
  async fetchAllTodos() {
    const todos = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
    return todos.data as ITodo[];
  }

  async getTodo(index: string) {
    const todo = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos/${index}`);
    return todo.data
  }
}
