import {ProductTypes} from "./productTypes";
import { v4 as uuid } from 'uuid';
import {IProduct} from "../models";

export const products: IProduct[] = [
  {
    id: uuid(),
    name: "Iphone",
    type: ProductTypes.MOBILE_PHONE,
    price: 500
  },
  {
    id: uuid(),
    name: "HP ultra",
    type: ProductTypes.LAPTOP,
    price: 750
  },
  {
    id: uuid(),
    name: "Nokia",
    type: ProductTypes.MOBILE_PHONE,
    price: 100
  },
  {
    id: uuid(),
    name: "i7 + 3060",
    type: ProductTypes.PC,
    price: 1200
  }
]
