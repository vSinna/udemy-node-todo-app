//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server')
    }

    console.log('Connected to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: "Eat lunch",
    //     completed: false
    //
    // }, (error, result) => {
    //
    //     if( error) {
    //         return console.log('Unable to insert todo', error)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //
    // })


    // db.collection('Users').insertOne({
    //     name: "Sinna",
    //     age: 25,
    //     location: "Detroit"
    //
    // }, (error, result) => {
    //
    //     if (error) {
    //         return console.log(`Unable to add user`, error)
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 4))
    //
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectID('585a8a285fd74c0dc53c5130')
    // }).toArray()
    //     .then((response) => {
    //         console.log("Todos")
    //         console.log(JSON.stringify(response[0], undefined, 2))
    //
    //     }, (error) => {
    //         console.log('Unable to fetch todos', error)
    //     })

    // db.collection('Todos').find().count()
    //     .then((response) => {
    //         console.log(`Todos Count: ${response}`)
    //
    //     }, (error) => {
    //         console.log('Unable to fetch todos', error)
    //     })

    // db.collection('Users').find({ name: "Kwame"}).toArray()
    //     .then((response) => {
    //         console.log(response)
    //     })

    db.close()

})