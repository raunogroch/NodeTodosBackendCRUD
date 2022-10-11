const express = require("express")
const dotenv = require("dotenv")
const Todo = require("./src/routes/todo.routes")
const cors = require("cors")
require('./src/database/index')


dotenv.config()

const PORT  = process.env.PORT ? process.env.PORT : 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todo', Todo)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})