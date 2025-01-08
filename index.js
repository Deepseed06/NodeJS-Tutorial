const express = require('express');
const app = express();

app.get('/', ({req, res}) => {
res.status(200).send('HomePage')
})


app.listen(5000,() => {
    console.log('Server is running at port 5000...')
})