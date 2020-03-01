

//Set

let set = new Set();

let frederikke = {name: 'Frederikke'}
let carla = {name: 'Carla'}
let simone = {name: 'Simone'}
let peter = {name: 'Peter'}

set.add(frederikke)
set.add(carla)
set.add(simone)
set.add(peter)

console.log(set)
console.log('Size of set', set.size)
console.log(set.delete(simone))
console.log('Size of set', set.size)
console.log(set)

for(user of set){
    console.log(user)
}