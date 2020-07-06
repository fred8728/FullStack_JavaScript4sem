
//Destructuring array


//Basis destructuring

var des = ['Hey', 'Hola', 'Salam', 'hEj', 'Hallo']

var [first, secound] = des

console.log(first) //Hey
console.log(secound) //Hola


//Skipping items in array
var [first1,,third, fourth,] = des
console.log(first1) //Hey
console.log(third) //Salam
console.log(fourth) //hEJ

//Declring variables before assignemt

var f, s;
[f,s ] = ['Tomat', 'Citron', 'Salat', 'Pandekager']

console.log(f) //Tomat
console.log(s) //Citron

//skipping all items just do like this 

var [,,,,] = ['Tomat', 'Citron', 'Salat', 'Pandekager']

//Assign rest of array like this

var [first, ...last] = ['Tomat', 'Citron', 'Salat', 'Pandekager']
console.log(first)
console.log(last) //citron, salat, pandekager

//Destructing assignment with functions

function getArray(){
    return ['Sød', 'Dum', 'Grim', 'Heldig', 'Smuk']
}

var [, ...all] = getArray() //dum, grim, heldig , smuk
console.log(all)