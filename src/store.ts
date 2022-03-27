import { createContext } from "react";

const InitialState = { first: "Kevin", last: "Mason" };

export type UserState = typeof InitialState;

const context = createContext<typeof InitialState>(InitialState); //types are inferred hover over stuff to see

export default context;
