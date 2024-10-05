const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors')
const QuizModel = require('./Model/QuizModel');
// const Quiz = require('./Model/QuizModel');

const app = express()
//middleware
app.use(express.json())
app.use(cors())
const port = 3000;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('mongodb successfully connected'))
    .catch(err => console.error(err))


app.get('/quiz', (req, res) => {
    QuizModel.find()
        .then(result => res.json(result))
})

app.post('/quiz', (req, res) => {
    const quiz = req.body.newQuiz;
    QuizModel.create({
        quizzes: [{
            title: "HTML",
            icon: "picsss",
            questions: [
                {
                    question: 'What is HTML',
                    options: ['abs', 'fool', 'hypertext markup language', 'dungeon'],
                    answer: 'hypertext markup language'
                }
            ]
        }]
    }).then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})