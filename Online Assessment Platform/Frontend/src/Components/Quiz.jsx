import React, { useState } from 'react';

// Main Quiz Component
const Quiz = () => {
  // State to track if the quiz card has been clicked
  const [showQuiz, setShowQuiz] = useState(false);

  // Quiz questions data
  const questions = [
    {
      question: "What is the output of console.log(typeof null) in JavaScript?",
      options: ["null", "object", "undefined", "boolean"],
      answer: "object"
    },
    {
      question: "Which of the following is a primitive type in JavaScript?",
      options: ["Object", "Number", "Array", "Function"],
      answer: "Number"
    },
    {
      question: "What will let x = 5; console.log(x++) output?",
      options: ["5", "6", "undefined", "Error"],
      answer: "5"
    },
  ];

  // State to manage current question and score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Function to start quiz
  const startQuiz = () => {
    setShowQuiz(true);
  };

  // Function to handle answer selection
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  // Function to submit answer and go to next question
  const handleNextQuestion = () => {
    // Check answer and update score
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question or finish quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizCompleted(true);
    }
  };

  // Function to restart quiz
  const restartQuiz = () => {
    setShowQuiz(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsQuizCompleted(false);
  };

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      {!showQuiz ? (
        // Quiz Card
        <div onClick={startQuiz} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-2">JavaScript Basics Quiz</h2>
          <p className="text-gray-600">Test your knowledge on basic JavaScript concepts.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Start Quiz</button>
        </div>
      ) : (
        // Quiz Section
        <div className="w-full max-w-xl bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          {isQuizCompleted ? (
            // Quiz Completed View
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
              <p className="text-gray-600 mt-4">Your score: {score} / {questions.length}</p>
              <button onClick={restartQuiz} className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Restart Quiz</button>
            </div>
          ) : (
            // Quiz Question View
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
              <p className="text-gray-800 mb-6">{questions[currentQuestion].question}</p>
              <div className="grid gap-4 mb-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full text-left px-4 py-2 border rounded ${
                      selectedAnswer === option ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-200'
                    } hover:bg-blue-50`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
