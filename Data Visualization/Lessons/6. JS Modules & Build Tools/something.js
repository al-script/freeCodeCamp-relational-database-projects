import { thing } from "./thing.js";

// named export, export a named local variable, can export multiple things that have names
export const something = "a " + thing;
export const somethingElse = "something else";

export function foo() {}

let somethingEvenMoreElse = 'another else';

// default export:
export default somethingEvenMoreElse;