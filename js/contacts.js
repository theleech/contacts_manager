/* 
Activity: Contact manager
*/

// TODO: Complete the program

var Contact = {
  // initialize the contact
  init: function (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  },

  // return the contact
  describe: function () {
      var description = "Last name: " + this.lastname + ", first name: " + this.firstname;
      return description;
  }
};

// create first contact
var john = Object.create(Contact);
john.init("John", "Smith");

// create second contact
var jane = Object.create(Contact);
jane.init("Jane", "Doe");

// create contact list
var contacts = [];

// populate contact list
contacts.push(john);
contacts.push(jane);

console.log("Welcome to your contacts manager!");

// create a loop to run program until user chooses to quit
while (number != 0) {
  console.log("These are your options:\n1: List contacts\n2: Add contact\n0: Quit");
  var number = Number (prompt("Enter a number:\n1: List contacts\n2: Add contact\n0: Quit"));

  // output contact list
  if (number == 1) {
    console.log("Here is a list of all your contacts:");
    contacts.forEach(function (contact) {
      console.log(contact.describe());
    });
  }

  // ask for contact and add it to the list
  else if (number == 2) {
    var firstName = prompt("Enter first Name");
    var lastName = prompt("Enter last name:");
    var newContact = Object.create(Contact);
    newContact.init(firstName, lastName);
    contacts.push(newContact);
    console.log("Contact added");
  }
}