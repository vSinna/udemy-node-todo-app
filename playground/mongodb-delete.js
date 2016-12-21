
//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server')
    }

    console.log('Connected to MongoDB server')

    //deleteMany

    // db.collection('Todos').deleteMany({ text: "Eat lunch"})
    //     .then(respose => {
    //         console.log(respose)
    //     })


    // deleteOne

    // db.collection('Todos').deleteOne({text: "Eat ramen"})
    //     .then(response => {
    //         console.log(response)
    //     } )


    // findOneAndDelete

    db.collection('Todos').findOneAndDelete({completed: false})
        .then(response => {
            console.log(response)
        })




    db.close()

})