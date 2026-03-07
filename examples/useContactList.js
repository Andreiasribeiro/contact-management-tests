import { listContacts, addContact } from "../src/contactManagement.js";

/*
console.log to display in the terminal the function "listContacts",
which returns the formatted list
*/
console.log(listContacts());

// Add a new contact using the function addContact
console.log(addContact("John", 123));

console.log(listContacts());
