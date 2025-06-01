import React from 'react';
import machine2 from '../images/machine 2.png';
import ai from '../images/ai.jpeg'
import graphics from '../images/graphics.png';
import python from '../images/python.jpeg';
import web from '../images/web.jpeg';
import machine from '../images/machine.jpeg';
import developer from '../images/developer.jpeg';
import hacking from '../images/hacking.jpeg'
import programming from '../images/programming.jpeg';
import langauge from '../images/language.png';
const OurBooks = () => {
  // Book data array with price attribute
  const books = [
    {
      image: machine,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      description: "Comprehensive guide to algorithms with in-depth explanations and examples.",
      price: "$69.99",
    },
    {
      image: developer,
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "A handbook of agile software craftsmanship with principles for writing clean code.",
      price: "$32.99",
    },
    {
      image: graphics,
      title: "Design Patterns: Elements of Object-Oriented Software",
      author: "Erich Gammaes",
      description: "object-oriented software.",
      price: "$49.99",
    },
    {
      image: ai,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      description: "Comprehensive introduction to artificial intelligence, its techniques, and applications.",
      price: "$79.99",
    },
    {
      image: python,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      description: "Essential guide to software development practices and principles.",
      price: "$29.99",
    },
    {
      image: web,
      title: "Structure and Interpretation of Computer Programs",
      author: "Harold Abelson, Gerald Jay Sussman",
      description: "A foundational text on programming and computer science principles.",
      price: "$44.99",
    },
    {
      image: programming,
      title: "You Don't Know JS (JavaScript Series)",
      author: "Kyle Simpson",
      description: "An in-depth series on JavaScript, covering essential concepts and best practices.",
      price: "$25.99",
    },
    {
      image: langauge,
      title: "Computer Networking: A Top-Down Approach",
      author: "James F. Kurose, Keith W. Ross",
      description: "A thorough introduction to computer networking from a top-down perspective.",
      price: "$54.99",
    },
    {
      image: hacking,
      title: "Operating System Concepts",
      author: "Abraham Silberschatz, Greg Gagne, Peter B. Galvin",
      description: "Comprehensive guide to the fundamental concepts in operating systems.",
      price: "$64.99",
    },
  ];
  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book, index) => (
        <div key={index} className="max-w-sm mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <img src={book.image} alt="Book Cover" className="w-full h-56 object-cover" />
          
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h2>
            <h3 className="text-md font-medium text-gray-500 mb-3">{book.author}</h3>
            <p className="text-gray-600 mb-4">{book.description}</p>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-green-600">{book.price}</span>
              <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurBooks;