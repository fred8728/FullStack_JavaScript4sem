
// ( 3 )  Implement an ES6 class with a similar functionality as requested in part 2

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age
    }

    set name(name){
        this._name = name;
    }

    set age(age){
        this._age = age;
    }

    getInfo = function(){
        console.log(`${this._name}, ${this._age}`)
    }
}

const p = new Person('Frederikke', 24)
const p1 = new Person('Celina', 25)

p.getInfo();
