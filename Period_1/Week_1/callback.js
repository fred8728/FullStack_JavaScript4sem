var names = ["Lars", "Peter", "Jan", "Bo", "Annika", "Søren"];

// ( 1 ) own filter method
var myFilter = function(array, callback) {
  const newArr = [];
  for (let index in array) {
    if (callback(array[index])) {
      newArr.push(array[index]);
    }
  }
  return newArr;
};
const namesWithA = myFilter(names, el => el.includes("a"));
console.log("Filtered names", namesWithA);

// ( 2 ) own map method
var myMap = function(array, callback) {
  const newArr = [];
  for (let index in array) {
      const changedArr = callback(array[index])
      newArr.push(changedArr);
  }
  return newArr;
};

const reverseNames = myMap(names, el => el.reverse);
console.log("Reverse names", reverseNames)

// ( 3 ) own filter without array
Array.prototype.myFilter2 = function(callback){
    var newArr = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i,this)) newArr.push(this[i]);
    }
    return newArr;
}

const namesWithA2 = names.myFilter2(function(letter) {
    if(letter.match('a')) {
        return letter; 
    }
  }); 

  console.log(namesWithA2); 

  