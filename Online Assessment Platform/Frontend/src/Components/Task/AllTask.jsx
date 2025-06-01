import React from 'react';

const TaskCard = () => {
  // Sample data for tasks
  const tasks = [
    { 
      status: 'Complete', 
      technology: 'React', 
      contest: 'Frontend Challenge', 
      marks: 85 
    },
    { 
      status: 'Not Complete', 
      technology: 'JavaScript', 
      contest: 'Coding Marathon', 
      marks: 45 
    },
    { 
      status: 'Complete', 
      technology: 'HTML & CSS', 
      contest: 'UI/UX Contest', 
      marks: 70 
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      {tasks.map((task, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {task.contest} Contest
          </h3>
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-white ${task.status === 'Complete' ? 'bg-green-500' : 'bg-red-500'}`}>
              {task.status}
            </span>
            <span className="text-gray-700 font-medium">{task.technology}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Marks Earned:</span>
            <span className="text-xl font-bold text-gray-800">{task.marks}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
