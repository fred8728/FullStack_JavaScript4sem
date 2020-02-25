
const dosDetector = require('./dosDetector')

console.log(dosDetector)

const myDos = new dosDetector.DOS_Detector(2000)


console.log(myDos)

myDos.addUrl(10)

setTimeout(() => {
    myDos.addUrl(10)
},1500)

myDos.on('DosDetected', event => {
    console.log('Attack detected:', event)
})