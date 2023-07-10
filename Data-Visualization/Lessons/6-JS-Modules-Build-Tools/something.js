import { thing } from "./thing.js";

// named export, export a named local variable, can export multiple things that have names
export const something = "a " + thing;
export const somethingElse = "something else";

export function foo() {}

let somethingEvenMoreElse = 'another else';

// default export:
export default somethingEvenMoreElse;

// issue with default exports as can export as a different name than defined as within the module, so names won't match
// can be a different name inside and outside the module, gets confusing
 