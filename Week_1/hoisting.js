

//Example hoisting1 
function hoisting(){
    const a = true;
    if(a){
        var hasBeenInA = true;
        console.log('Been in A')
    }
    if(hasBeenInA){
        console.log('Has been in B')
    }
}
hoisting();

//Example hoisting2
function hoisting_1(){
    console.log('Hello ' + name)

    if(!name){
        var name = {value: 'Frederikke'}
        console.log(name.value)
    }
}
hoisting_1();

/**
 * NOTE: Når man erklærer variable ved hjælp af var bliver den hoisted op, så den ligger i toppen og derfor eksisterer name og hasBeenInA 
 */