require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const mongoose = require('mongoose')

//MIDDLEWARE 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Sever running on PORT ${PORT}`))