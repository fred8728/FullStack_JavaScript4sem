
function ups(){
    throw new Error('UUPS')
    ups()
}

function multiply(a,b){
    let result = a*b;
    ups()
    return result;
}

function square(n){
    return multiply(n,n)
}

function printSquare(n){
    let squared = square(n)
    console.log(squared)
}

printSquare(3)