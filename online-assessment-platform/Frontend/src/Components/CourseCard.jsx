// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={course.image} alt={course.title} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-indigo-500 transition duration-200">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-indigo-600">${course.price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
