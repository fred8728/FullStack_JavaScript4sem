
/**
 * a) Implement a generic function which will take an array of any kind, 
 * and return the array reversed (just use the built-in reverse function)
 */

 function reverseArr<Array>(args:any): any{
     //above i changed Array to any but i get an error - but output is same , so that why array
    return args.reverse()
 }


console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
console.log(reverseArr<number>(["a","b","c"]));

// b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:

/**
 * class DataHolder <T> {
    private _value: T
    constructor(value: T){
        this._value = value
    }

    getValue = () => {
        return this._value
    }

    setValue = (value: T) => {
        this._value = value
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
 */

// c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods

class DataHolder <T> {
    private _value: T
    constructor(value: T){
        this._value = value
    }

    get value () {
        return this._value
    }

    set value (value: T) {
        this._value = value
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);