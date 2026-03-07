// Create contact list
const contacts = [
  {
    name: "Police",
    phone: 190,
  },
  {
    name: "SAMU",
    phone: 192,
  },
  {
    name: "Firefighters",
    phone: 193,
  },
];

// The function listContacts() returns an array of formatted strings
export function listContacts() {
  // contactsWithDifferentFormat will store the formatted contacts
  const contactsWithDifferentFormat = [];

  contacts.forEach(function (contact) {
    contactsWithDifferentFormat.push(
      // using template string to format the list
      `Contacts: ${contact.name} / Telephone: ${contact.phone}`,
    );
  });

  // return the new formatted list
  return contactsWithDifferentFormat;
}

// Function to add a new contact to the list
// Input: name and phone
// Process: add a new contact with name and phone
// Output: last contact in the list
export function addContact(contactName, contactPhone) {
  contacts.push({
    name: contactName,
    phone: contactPhone,
  });

  // return the last contact in the list
  return contacts.at(-1);
}

/*
Iterates through the contacts list and returns the first contact
that matches the provided name using .find()
*/
export function findContactByName(contactName) {
  return contacts.find((contact) => contact.name === contactName);
}

/*
Finds the contact index, removes it from the list
and returns the removed contact
*/
export function removeContact(contactName) {
  const index = contacts.findIndex((contact) => contact.name === contactName);

  if (index !== -1) {
    return contacts.splice(index, 1)[0];
  }
}

// Updates a contact's phone number
export function updatePhone(contactName, newPhone) {
  const contact = contacts.find((contact) => contact.name === contactName);

  if (contact) {
    contact.phone = newPhone;
  }

  return contact;
}

// Returns the total number of contacts
export function countContacts() {
  return contacts.length;
}
