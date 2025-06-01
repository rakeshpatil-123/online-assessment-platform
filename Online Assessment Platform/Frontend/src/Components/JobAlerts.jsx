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

const JobAlerts = () => {
  // Job postings array
  const jobAlerts = [
    {
      image: programming,
      title: "Software Developer",
      description: "We are looking for a skilled software developer to join our team.",
    },
    {
      image: web,
      title: "Frontend Developer",
      description: "Join us as a frontend developer and work on amazing projects.",
    },
    {
      image: ai,
      title: "Backend Developer",
      description: "Backend developer needed with experience in Node.js and databases.",
    },
    {
      image: machine,
      title: "UI/UX Designer",
      description: "Seeking a UI/UX designer to create intuitive user experiences.",
    },
    {
      image: python,
      title: "Data Scientist",
      description: "Data scientist needed to analyze large datasets and provide insights.",
    },
    {
      image: graphics,
      title: "DevOps Engineer",
      description: "Looking for a DevOps engineer to improve deployment pipelines.",
    },
    {
      image: developer,
      title: "Project Manager",
      description: "Project manager needed to lead teams and ensure timely delivery.",
    },
    {
      image: hacking,
      title: "Quality Assurance Engineer",
      description: "Join as a QA engineer to maintain high product quality standards.",
    },
    {
      image: machine,
      title: "Mobile App Developer",
      description: "Hiring a mobile app developer to build applications for iOS and Android.",
    },
  ];
  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobAlerts.map((job, index) => (
        <div key={index} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img src={job.image} alt="Job Alert" className="w-full h-48 object-cover" />
          
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobAlerts;