import React, { useState, useEffect } from 'react';

const Live = () => {
  // State to hold live class data (can be fetched from an API)
  const [liveClasses, setLiveClasses] = useState([]);

  // Simulated fetching of live classes (in real-world apps, use API calls)
  useEffect(() => {
    const fetchLiveClasses = () => {
      const data = [
        { id: 1, title: 'React Basics', instructor: 'John Doe', time: '10:00 AM' },
        { id: 2, title: 'Advanced Js  ', instructor: 'Jane Smith', time: '2:00 PM' },
        { id: 3, title: 'Node.js Deep Dive', instructor: 'Alex Johnson', time: '5:00 PM' },
      ];
      setLiveClasses(data);
    };

    fetchLiveClasses();
  }, []);

  // Handler for joining a class
  const handleJoinClass = (title) => {
    alert(`Joining the class: ${title}`);
    // In real-world apps, redirect to the live class or video platform.
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Live Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {liveClasses.length === 0 ? (
          <p className="text-center text-gray-500">Loading live classes...</p>
        ) : (
          liveClasses.map((liveClass) => (
            <div key={liveClass.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{liveClass.title}</h2>
              <p className="text-gray-600 mt-2">Instructor: {liveClass.instructor}</p>
              <p className="text-gray-600">Time: {liveClass.time}</p>
              <button
                onClick={() => handleJoinClass(liveClass.title)}
                className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Join Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Live;