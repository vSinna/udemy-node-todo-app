const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')
const {ObjectID} = require('mongodb')

// const id = '585aedd5bfeb4f19005f1f4b'
//
// if (!ObjectID.isValid(id)) {
//     return console.log('Id not valid')
// }
//
// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos)
// })
//
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo)
// })
//
// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By ID', todo)
// }).catch(error => {
//     console.log(error)
// })


const userID = '585af4e2d978461a0923fe9b'
User.findById(userID).then(user => {
    if (!user) {
        return console.log('User not found')
    }
    console.log(user)
}, error => {
    console.log(error)
})