const express = require('express');

const app = express()

const port = 3000;


app.get('/',(req, res) => {
    res.json([{Javascript: "answered"},{Css : "Cascading style sheet"}])
})
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
} )