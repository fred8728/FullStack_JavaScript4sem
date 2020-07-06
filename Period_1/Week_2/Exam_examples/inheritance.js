
//Inheritance example 1

class Animal{
    constructor(name){
        this.name = name
        this._age = 0
    }

    get age () {
        return this._age
    }

    set age (value){
        if(value<0){
            console.log('Animal cant be dead')
        }
        this._age = value
    }

    getAnimal(){
        console.log('I am a ' + this.name)
    }
}

var monkey = new Animal('Monkey')
var giraf = new Animal('Giraf')
var flodhest = new Animal('Flodhest')

monkey.getAnimal();
monkey.age = 15
console.log('Monkey is ' + monkey.age + ' years old')
giraf.getAnimal();
flodhest.getAnimal();