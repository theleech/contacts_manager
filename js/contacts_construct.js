/* 
Activity: Contact manager
*/

// TODO: Complete the program


  // initialize the contact using constructor function
  function Contact (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  }

  // return the contact
  Contact.prototype.describe = function () {
      var description = "Last name: " + this.lastname + ", first name: " + this.firstname;
      return description;
  }


// create first contact
var john = new Contact("John", "Smith");

// create second contact
var jane = new Contact("Jane", "Doe");

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
    var newContact = new Contact(firstName, lastName);
    contacts.push(newContact);
    console.log("Contact added");
  }
}