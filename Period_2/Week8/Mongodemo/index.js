
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstackUser:xbq47vzw@fullstack-cluster-varhq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function mongoTest(){
    try{
        await client.connect()
        const dogs = client.db('kennel') //creates db
        const dogsCollection = dogs.collection('dogs') //creates collection
        await dogsCollection.insertMany([{name: 'Bella', race: 'Golden Retriever'}, {name:'Carla', race:'Golden Retriever'}, {name: 'Max'}])
        await dogsCollection.insertOne({name:'Pepsi'})
        const allDogs = await dogsCollection.find({}).toArray()
        console.log(allDogs)
    }catch(err){
        console.log(err)
    }finally{
        client.close()
        console.log('closed')
    }
}

mongoTest()