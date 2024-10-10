const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    quizzes: [
        {
            id: String,
            title: String,
            icon: String,
            questions: [
                {
                    id: String,
                    question: String,
                    options: [String],
                    answer: String
                }
            ]
        }
    ]

})

const Quiz = mongoose.model("quiz", QuizSchema)
module.exports = Quiz;