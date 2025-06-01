import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for previous question papers
const questionPapersData = [
  {
    id: 1,
    title: "ReactJS Development - Previous Paper",
    subject: "ReactJS",
    date: "2023-05-10",
    description: "This paper includes questions on ReactJS components, hooks, state management, and more.",
    questions: [
      "What is JSX and how does it work?",
      "Explain React hooks with examples.",
      "What is the Virtual DOM and its benefits?",
      "Describe how React handles state and props.",
    ],
  },
  {
    id: 2,
    title: "JavaScript Algorithms - Previous Paper",
    subject: "JavaScript",
    date: "2023-08-15",
    description: "This paper focuses on algorithms, including sorting, recursion, and data structures in JavaScript.",
    questions: [
      "Explain the quicksort algorithm and its time complexity.",
      "How do you implement a linked list in JavaScript?",
      "What is recursion and give an example?",
      "How does the JavaScript event loop work?",
    ],
  },
  {
    id: 3,
    title: "Data Structures - Previous Paper",
    subject: "Algorithms",
    date: "2023-09-20",
    description: "Questions related to basic data structures like arrays, linked lists, stacks, and queues.",
    questions: [
      "What is a stack, and how does it work?",
      "Explain the difference between a queue and a stack.",
      "What is a binary search tree (BST)?",
      "Explain the time complexity of common sorting algorithms.",
    ],
  },
];

function PreviousQuestionPapers() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-zinc-500 mb-8">Previous Question Papers</h1>

      {/* List of Papers */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionPapersData.map((paper) => (
          <div
            key={paper.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300"
            onClick={() => setSelectedPaper(paper)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{paper.title}</h2>
            <p className="text-sm text-gray-500">Subject: {paper.subject}</p>
            <p className="text-sm text-gray-500">Date: {paper.date}</p>
            <p className="text-md text-gray-700 mt-3">{paper.description}</p>

            {/* Button to view more details */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPaper(paper);
              }}
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Paper
            </button>
          </div>
        ))}
      </div>

      {/* Display Paper Details */}
      {selectedPaper && (
        <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">{selectedPaper.title}</h2>
          <p className="text-sm text-gray-500">Subject: {selectedPaper.subject}</p>
          <p className="text-sm text-gray-500">Date: {selectedPaper.date}</p>
          <p className="text-md text-gray-700 mt-3">{selectedPaper.description}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Questions:</h3>
            <ul className="list-disc list-inside space-y-2 mt-4">
              {selectedPaper.questions.map((question, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {index + 1}. {question}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => setSelectedPaper(null)}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Back to Papers
            </button>

            {/* "Start Paper" button */}
            <Link
              to={`/test/${selectedPaper.id}`} // Corrected dynamic URL
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Start Paper
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviousQuestionPapers;
