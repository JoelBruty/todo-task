const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemsController.getTodos)
router.get('/item/:id', itemsController.getTodo)
router.post('/create', itemsController.createTodo)
router.patch('/edit/:id', itemsController.editTodo)
router.delete('/delete/:id', itemsController.deleteTodo)
module.exports = router

