import { v4 as uuid } from 'uuid';
import {IUser} from "../models";
export const users: IUser[] = [
  {
    id: uuid(),
    name: "Nik",
    surname: "Aver",
    age: 25
  },
  {
    id: uuid(),
    name: "Son",
    surname: "Polli",
    age: 20
  },
  {
    id: uuid(),
    name: "Pash",
    surname: "Rub",
    age: 38
  },
  {
    id: uuid(),
    name: "Il",
    surname: "Es",
    age: 31
  }
]
