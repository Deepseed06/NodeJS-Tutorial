const express = require('express');
const app = express();
const people = require('./data')

app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => {
res.status(200).json({success:true, data:people})
})

app.get('*', (req, res) => {
    res.status(400).send('<h1>Resource Not Found<h1>')
})

app.listen(5000,() => {
    console.log('Server is running at port 5000...')
})