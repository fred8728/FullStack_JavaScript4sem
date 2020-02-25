//The reduce method

var all = ["Lars", "Peter", "Jan", "Bo"];

// ( A ) Use join to create a single string from all, with names: comma, space and # separator

console.log(all.join(" "));
console.log(all.join(", "));
console.log(all.join(" #"));

// ( B ) Create a reducer function that will return the sum (105) of all values in numbers

var numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));

// ( C ) Given this array --> create a reducer function that will return the average age of all members

var reducer_two = function(accumulator, member,index,arr ){  
    accumulator = 0
    res = accumulator += member.index / arr.length
    return accumulator
}

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 }
];

sum = 0
for (let mem of Object.values(members)) 
result = sum += mem.age / members.length
console.log('Average of members age not using recuse function', result);


console.log('Average of members age using reduce function', members.reduce(reducer_two))

//const fs = require('fs')
// import fs from 'fs'

