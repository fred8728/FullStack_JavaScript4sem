//tsc --watch
//Undervisningsdoku

function logger(a: number, b: string) {
  console.log(`Number Value 1: ${a}, String Value 2: ${b}`);
}

let a = 12;
let b = "Hello";
logger(a, b);

//Interface example 
interface IPerson {
  name: string;
}
interface IAddress {
  address: string;
}

function loggerV2(a: IPerson, b: IAddress) {
  console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`);
}
let person: IPerson;
person = { name: "Simone" };
let address: IAddress;
address = { address: "Mosebakken 53" };

loggerV2(person, address);


//Class example
class Person implements IPerson {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
  set name(val:string){this._name=val}
}

let p = new Person("Frederikke")
p.name = "Louise"

loggerV2(p,address)

//Generic example
function loggerV3<T,U>(a:T, b:U){
    console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
}

loggerV3(a,b)

class GenericLogger<T,U>{
    log = (a:T,b:U) => console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
}

const logger1 = new GenericLogger<number, string>();
const logger2 = new GenericLogger<IPerson, IAddress>();

console.log("Changing ")
logger1.log(a,b)
logger2.log(person, address)

let myNumber:Array<string> = ["hej", "hello", "hEjjj"]
let myBool:Array<boolean> = [true]