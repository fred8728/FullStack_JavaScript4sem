
//Rest parameters
function rest(...something){
    let sum = 0
    for(let i of something){
        sum +=i;
    }
    return sum
}

console.log(rest(1,23,14,15,15,53,54,42)) //217
console.log(rest(1,2,3,4,5)) //15


function rest2(name, name1, ... name2){
    console.log("Name length of name1", name1.length)
    console.log(`Print out names: ${name} ${name1}`)
}

rest2("Frederikke", "Simone", "Cathrine", "Kirsten", "Peter", "Bella", "Carla")