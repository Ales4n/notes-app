 const express = require('express')
 const router = express.Router()

 router.get('/', (req,res) =>{
     res.render('index', {tittle: 'Home'})
 })
 router.get('/new-entry', (req,res) =>{
    res.render('new-entry', {tittle: 'New entry'})
})
 module.exports = router