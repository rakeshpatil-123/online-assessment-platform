import React from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';

// Sample test series data (can be fetched from an API or database)
const testSeriesData = [
  {
    id: 1,
    title: "ReactJS Development",
    difficulty: "Intermediate",
    category: "Frontend",
    duration: "60 mins",
    description: "This test covers ReactJS concepts like components, hooks, and state management.",
    questions: [
      { id: 1, question: "What is a React Hook?" },
      { id: 2, question: "Explain Virtual DOM in React." },
      { id: 3, question: "What is JSX?" },
    ],
  },
  {
    id: 2,
    title: "JavaScript Algorithms",
    difficulty: "Advanced",
    category: "Frontend",
    duration: "90 mins",
    description: "A challenging set of problems involving JavaScript algorithms and data structures.",
    questions: [
      { id: 1, question: "Explain the time complexity of quicksort." },
      { id: 2, question: "What is a binary search tree?" },
      { id: 3, question: "How do you solve the knapsack problem?" },
    ],
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    difficulty: "Beginner",
    category: "Algorithms",
    duration: "120 mins",
    description: "A beginner-friendly test on fundamental data structures and algorithms like arrays, linked lists, and sorting.",
    questions: [
      { id: 1, question: "Explain the concept of an array." },
      { id: 2, question: "What is the difference between a stack and a queue?" },
      { id: 3, question: "What is a linked list?" },
    ],
  },
  {
    id: 4,
    title: "Node.js Basics",
    difficulty: "Beginner",
    category: "Backend",
    duration: "45 mins",
    description: "Test your understanding of Node.js, its modules, and basic backend development principles.",
    questions: [
      { id: 1, question: "What is Node.js?" },
      { id: 2, question: "How do you handle HTTP requests in Node?" },
      { id: 3, question: "What is a callback function?" },
    ],
  },
];

function TestSeries() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find the test by ID if the user has selected one
  const test = id ? testSeriesData.find((test) => test.id === parseInt(id)) : null;

  if (test) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-zinc-500 mb-6">{test.title}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold">Difficulty: {test.difficulty}</h3>
          <p className="text-lg text-gray-500">Duration: {test.duration}</p>
          <p className="text-md text-gray-700 mt-2">{test.description}</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Questions:</h3>
            <ul className="space-y-4 mt-4">
              {test.questions.map((q) => (
                <li key={q.id} className="text-lg text-gray-700">
                  {q.id}. {q.question}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => alert('Test Started')}
          >
            Start Test
          </button>

          <button
            onClick={() => navigate('/')}
            className="mt-3 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Back to Test Papers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-zinc-500 mb-6">Test Series Papers</h1>
      <div className="space-y-6">
        {testSeriesData.map((test) => (
          <div
            key={test.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6">
              <div>
                <h2 className="text-2xl font-semibold">{test.title}</h2>
                <p className="text-sm text-gray-500">Category: {test.category}</p>
                <p className="text-sm text-gray-500">Difficulty: {test.difficulty}</p>
                <p className="text-sm text-gray-500">Duration: {test.duration}</p>
                <p className="text-md text-gray-700 mt-2">{test.description}</p>
              </div>
            </div>
            <div>
              <Link
                to={`/test/${test.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Start Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestSeries;
