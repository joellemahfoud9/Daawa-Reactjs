import { atom } from "jotai";
import { Business } from "./models/Business";

export const cartItemsAtom = atom<Business[]>([]);
