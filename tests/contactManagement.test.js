import {
  addContact,
  listContacts,
  findContactByName,
  removeContact,
  updatePhone,
  countContacts,
} from "../src/contactManagement.js";

import assert from "node:assert";

describe("Contact Management Module Tests", () => {
  // Test to verify if a new contact is added
  it("Should add a new contact", () => {
    const lastAddedContact = addContact("Edna", 12345);

    assert.deepEqual(lastAddedContact, {
      name: "Edna",
      phone: 12345,
    });
  });

  // Test to verify if the added contact appears in the list
  it("Should show the added contact in the list", () => {
    const list = listContacts();

    assert.ok(list.includes("Contacts: Edna / Telephone: 12345"));
  });

  // Test to verify if a contact can be found by name
  it("Should find a contact by name", () => {
    const contact = findContactByName("Police");

    assert.deepEqual(contact, {
      name: "Police",
      phone: 190,
    });
  });

  // Test to verify if a contact is correctly removed
  it("Should remove a contact", () => {
    const removedContact = removeContact("SAMU");

    assert.deepEqual(removedContact, {
      name: "SAMU",
      phone: 192,
    });
  });

  // Test to verify if a contact phone number can be updated
  it("Should update the phone number", () => {
    const updatedContact = updatePhone("Police", 999);

    assert.deepEqual(updatedContact, {
      name: "Police",
      phone: 999,
    });
  });

  // Test to verify the number of contacts
  it("Should count the contacts", () => {
    const total = countContacts();

    assert.equal(total, 3);
  });
});
