const mongoose = require('mongoose')
const QuizSchema = new mongoose.Schema({
    "quizzes": [
        {
            title: String,
            icon: String,
            questions: [
                {
                    question: String,
                    options: Array,
                    answer: String
                }
            ]
        }
    ]
})

const Quiz = mongoose.model("quiz", QuizSchema)
module.exports = Quiz;
