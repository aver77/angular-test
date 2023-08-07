import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IUser} from "../../../models";
import {UserService} from "../../../services/user.service";

@Component({
  template: `
    <div class="container">
        <p>Name: {{user.name}}</p>
        <p>Surname: {{user.surname}}</p>
        <p>Age: {{user.age}}</p>
      <button (click)="removeUser(user.id)">Удалить</button>
      <button (click)="getInfo(user.id)">Информация</button>
    </div>
    <div *ngIf="infoModalOpen" class="modal">
      <p>id: {{userInfo.id}}</p>
      <p>Name: {{userInfo.name}}</p>
      <p>Surname: {{userInfo.surname}}</p>
      <p>Age: {{userInfo.age}}</p>
    </div>
  `,
  styleUrls: ["user.component.scss"],
  selector: "app-user"
})
export class UserComponent {

  infoModalOpen: boolean = false;
  userInfo: IUser = {} as IUser
  constructor(private userService: UserService) {
  }
  @Input() user: IUser;
  @Output() setUsers = new EventEmitter();
  removeUser(id: string) {
    const users = this.userService.removeUser(id);
    console.log(users)
    this.setUsers.emit(users)
  }

  getInfo(id: string) {
    const newState = !this.infoModalOpen
    this.infoModalOpen = newState
    if (newState) {
      this.userInfo = this.userService.getUser(id);
    }
  }
}
