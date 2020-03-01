
/**
 * Create a simple test file that should import the class, 
 * make an instance, and test the behaviour by adding the same URL more than once 
 * (use setTimeout to make the second call)
 */

const dosDetector = require("./dosDetector");

//Testing behavior
const myDos = new dosDetector.DOS_Detector(1000)
console.log(myDos)


//adding to map
myDos.addUrl(20)
myDos.addUrl(20)
myDos.addUrl(20)

setTimeout(() => {
    myDos.addUrl(20)
}, 1000)

myDos.on('Dosdeteched', e => {
    console.log('Attack:', e)
})
