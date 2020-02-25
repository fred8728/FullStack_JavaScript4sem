var animal = {
  type: function() {
    return this.type;
  },
  reg_no: function() {
    return this.reg_no;
  },
  year: function() {
    return this.year;
  }
};

var ani = {
  type: "Lion",
  reg_no: 1234567,
  year: 2020
};

var ani_1 = {
  type: "Monkey",
  reg_no: 8765432,
  year: 2012
};

//using call() 
console.log(animal.type.call(ani));
console.log(animal.reg_no.call(ani));
console.log(animal.year.call(ani));
console.log(
  animal.type.call(ani_1) +
    ", " +
    animal.reg_no.call(ani_1) +
    ", " +
    animal.year.call(ani_1)
);

// using apply()
console.log(animal.type.apply(ani_1))
