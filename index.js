require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./router')
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
app.use('/images', express.static('images'))
app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

mongoose.set('strictQuery', false)
const start = async () => {
    try {
        await mongoose.connect(
            process.env.DB_URL || 
            'mongodb+srv://selectsneakers63:mister2007@cluster0.bjafa1u.mongodb.net/?retryWrites=true&w=majority'
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start()
