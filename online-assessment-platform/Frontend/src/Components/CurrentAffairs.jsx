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
const CurrentAffairs = () => {
  // Current Affairs data array
  const currentAffairs = [
    {
      image: machine,
      title: "New Environmental Policy Released",
      date: "12 Nov 2024",
      category: "Environment",
      summary: "The government has introduced a new policy focusing on sustainable development and climate action.",
      link: "#"
    },
    {
      image: programming,
      title: "Tech Innovations in 2024",
      date: "11 Nov 2024",
      category: "Technology",
      summary: "Highlights of this year's top technological advancements, including AI breakthroughs and green technology.",
      link: "#"
    },
    {
      image: developer,
      title: "Global Health Summit 2024",
      date: "10 Nov 2024",
      category: "Health",
      summary: "World leaders gather to discuss pressing health issues and ways to improve global health systems.",
      link: "#"
    },
    {
        image: python,
        title: "New Released",
        date: "12 Nov 2024",
        category: "Entertainment",
        summary: "The government has introduced a new policy focusing on sustainable development and climate action.",
        link: "#"
      },
      {
        image: graphics,
        title: " Innovations in 2024",
        date: "11 Nov 2024",
        category: "Technology",
        summary: "Highlights of this year's top technological advancements, including AI breakthroughs and green technology.",
        link: "#"
      },
      {
        image: web,
        title: "Global 2024",
        date: "10 Nov 2024",
        category: "Health",
        summary: "World leaders gather to discuss pressing health issues and ways to improve global health systems.",
        link: "#"
      },
    // Add more news items as needed
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentAffairs.map((news, index) => (
        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <img src={news.image} alt="Current Affairs" className="w-full h-48 object-cover" />
          
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500">{news.date}</span>
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">{news.category}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">{news.title}</h2>
            <p className="text-gray-600 mb-4">{news.summary}</p>
            
            <a href={news.link} className="text-blue-500 hover:text-blue-700 font-semibold text-sm inline-block">
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentAffairs;