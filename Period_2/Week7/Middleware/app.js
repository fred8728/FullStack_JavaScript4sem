const Express = require("express")
const app = Express();
const cors = request('Cors')

/**
 * app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
 */

app.use(Cors())

app.get("/", (request, response) => {
    response.send('Hello World')
})

app.listen(3000, () => {
    console.log('Listening at port 3000....')
})