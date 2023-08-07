import {Injectable} from "@angular/core";
import {users} from "../data/users";
import {IUser} from "../models";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: IUser[] = users

  getUsers() {
    return users
  }

  addUser(user: IUser) {
    this.users = [...this.users, user];
    return this.users
  }

  getUser(id: string) {
    return this.users.find(user => user.id == id) as IUser;
  }

  removeUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
    return this.users
  }
}
