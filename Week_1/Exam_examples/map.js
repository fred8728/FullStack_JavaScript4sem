//Maps

let map = new Map();

map.set(1, 'Frederikke')
map.set(2, 'Carla')
console.log(map.get(2)) //gets Carla
console.log('Size of map', map.size)
console.log('Delete', map.delete(1))
console.log('Just deleted, size should be 1:', map.size)


let lst_of_greens = new Map([
 ['agurk', 1],
 ['Tomater', 10],
 ['Sød kartoffel', 1],
 ['Bage kartofler', 2],
 ['Hvidløg', 3],
 ['Løg', 3],
])

//iterate over keys 
for(vege of lst_of_greens){
    console.log(vege)
}

for(vege of lst_of_greens.values()){
    console.log('Amount of vegies', vege)
}

console.log(lst_of_greens.get('Løg')) //3