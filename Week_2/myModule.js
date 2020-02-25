
//self invoking function

(function myModule(){
    console.log('Hej')
})()

//hvor er jeg henne?
console.log(__dirname)
console.log(module)

// uden parenteser --> reference til metode fx myModule