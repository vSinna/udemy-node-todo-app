
//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {

    if (error) {
        return console.log('Unable to connect to MongoDB Server')
    }

    console.log('Connected to MongoDB server')


    // findOneAndUpdate

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('585a95983cad7907e1f4e70c')
    }, {
        $set: {
            completed: true
        }

    }, {
        returnOriginal: false
    })
        .then(response => {
            console.log(response)
        })




    db.close()

})
