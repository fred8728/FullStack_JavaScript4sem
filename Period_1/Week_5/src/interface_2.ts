// a Create an interface to describe a function:
//myFunc that should take three string parameters
//and return a String Array.
interface IMyFunc {
  (first: string, second: string, third:string): string[];
}

// b) Design a function "implementing" this interface which returns an array with the three strings
let myFunc: IMyFunc = function(first: string, second:string, third:string) {
  return [first, second, third]
};

let test = myFunc("Hej med dig", "Hvad så du", "Laver du mad?");
console.log(test);

// c) Design another implementation that returns an array, with the three strings uppercased.
let myUpper:IMyFunc = function(first: string, second:string, third:string) {
  return [first.toUpperCase(), second.toUpperCase(), third.toUpperCase()]
};

let test2 = myUpper('hej', 'hola', 'bye')
console.log(test2)

// d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, 
//to simulate a method that uses the interface.

let f2 = function logger(f1: IMyFunc){
  //Simulate that we get data from somewhere and uses the provided function
  let [ a, b, c] = ["A", "B", "C"];
  console.log(f1(a,b,c));
}

// Test f2 with the two implementations created in b+c.
f2(myFunc)
f2(myUpper)

