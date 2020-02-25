
// ( 2 ) Implement a reusable function using the closure feature, that should encapsulate information about a person ( name and age) and returns a object with the following methods:
//setAge, setName, getInfo

const person = (function() {
  return {
    setName: function(name) {
      this.name = name;
    },
    setAge: function(age) {
      this.age = age;
    },
    getInfo: function() {
      console.log(this.name + ", " + this.age);
    }
  };
})();
//The 3 functions are private and therefore you cant access them directly from outside the anonomous function.
//Instead they must be accessed bu the three public functions that are returned from the anonomous wrapper --> () 

person.setName('Simone')
person.setAge(24);
person.getInfo();
