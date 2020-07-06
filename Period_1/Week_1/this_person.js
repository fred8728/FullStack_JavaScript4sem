
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  address: function() {
    return this.address + ", " + this.zipCode;
  }
};

var p = {
  firstName: "Frederikke",
  lastName: "Nilsson",
  address: "Mosebakken 52",
  zipCode: 2670
};

var p1 = {
  firstName: "Malene",
  lastName: "Hansen",
  address: "Lerås 18 ",
  zipCode: 2670
};

//The call method can be used to invoke (call) a method with an owner object as an argument(parameter)
console.log(person.fullName.call(p1))
console.log(person.address.call(p))
console.log(person.fullName.call(p) + ' ' + person.address.call(p))

//Apply is the same as call() method
console.log(person.fullName.apply(p))
