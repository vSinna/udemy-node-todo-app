const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {ObjectID} = require('mongodb')

const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()


app.use(bodyParser.json())
app.post('/todos', (request, response) => {
    const todo = new Todo({
        text: request.body.text
    })
    console.log(request.body)

    todo.save().then(doc => {
        response.send(doc)

    }, error => {
        response.status(400).send(error)
    })

})


app.get('/todos', (request, response) => {
    Todo.find().then( todos => {
        response.send({
            todos,

        })
    }, error => {
        response.status(400).send(error)

    })
})

app.get('/todos/:id', (request, response) => {
    const id = request.params.id
    if (!ObjectID.isValid(id)) {
        console.log('Invalid Todo ID')
        return response.status(404).send('Invalid Todo ID')
    }
    Todo.findById(id).then( todo => {
        if (!todo) {
            console.log('Todo Not Found')
            return response.status(404).send('Todo Not Found')
        }
        console.log(todo)
        response.send({todo})
    })

})



app.listen(3000, () => {
    console.log(`Started on port 3000`)
})