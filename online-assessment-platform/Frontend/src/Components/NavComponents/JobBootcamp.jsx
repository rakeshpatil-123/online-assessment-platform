import React from 'react';
import { motion } from 'framer-motion';

const bootcampsData = [
  {
    id: 1,
    title: "Full Stack Development Bootcamp",
    provider: "CodeOp",
    date: "Ongoing",
    description: "Learn to build full stack applications using JavaScript, covering both front-end and back-end development.",
    link: "https://codeop.tech/coding-bootcamp/",
  },
  {
    id: 2,
    title: "Frontend Developer Career Path",
    provider: "Scrimba",
    date: "Ongoing",
    description: "An immersive path to become a frontend developer, created in collaboration with Mozilla MDN.",
    link: "https://scrimba.com/frontend-path-c0j",
  },
  {
    id: 3,
    title: "Introduction to DevOps",
    provider: "Great Learning",
    date: "Ongoing",
    description: "A free course covering DevOps basics, including Docker, Jenkins, and continuous monitoring.",
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-devops1",
  },
  {
    id: 4,
    title: "JavaScript Practice Portal",
    provider: "GeeksforGeeks",
    date: "Ongoing",
    description: "Interactive quizzes and exercises to enhance JavaScript coding skills.",
    link: "https://www.geeksforgeeks.org/practice-javascript-online/",
  },
  {
    id: 5,
    title: "Full Stack Web Development Bootcamp",
    provider: "Coding Ninjas",
    date: "Ongoing",
    description: "Master MERN or Spring Boot with real-world projects and 1:1 mentorship.",
    link: "https://www.codingninjas.com/job-bootcamp-web-development",
  },
  {
    id: 6,
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    date: "Ongoing",
    description: "Comprehensive course covering HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3, and DApps.",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    id: 7,
    title: "Frontend Development Specialization",
    provider: "Coursera (Scrimba)",
    date: "Ongoing",
    description: "From your first line of code to building professional React apps.",
    link: "https://www.coursera.org/specializations/frontend",
  },
  {
    id: 8,
    title: "Full Stack Developer Bootcamp",
    provider: "4Geeks Academy",
    date: "Ongoing",
    description: "Go from zero to getting paid as a Full-Stack Developer in just 18 weeks.",
    link: "https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer",
  },
  {
    id: 9,
    title: "Full Stack Software Engineer Bootcamp",
    provider: "Metana",
    date: "Ongoing",
    description: "Learn to code from scratch and become a job-ready full-stack developer with a hands-on, beginner-friendly tech bootcamp.",
    link: "https://metana.io/full-stack-software-engineer-bootcamp/",
  },
  {
    id: 10,
    title: "Online Coding Bootcamp",
    provider: "Fullstack Academy",
    date: "Ongoing",
    description: "Comprehensive coding instruction, professional career coaching, and in-depth projects within an immersive virtual classroom.",
    link: "https://www.fullstackacademy.com/programs/online-coding-bootcamp",
  },
];

const JobBootcamp = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 drop-shadow-md">
        🚀 Job Bootcamp Highlights
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {bootcampsData.map((bootcamp) => (
          <motion.div
            key={bootcamp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: bootcamp.id * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 border hover:scale-[1.02] transition-transform duration-300 hover:border-blue-400"
          >
            <h2 className="text-xl font-semibold text-blue-800">{bootcamp.title}</h2>
            <p className="text-sm text-gray-500 mt-1">By {bootcamp.provider} — {bootcamp.date}</p>
            <p className="text-gray-700 mt-3 text-sm">{bootcamp.description}</p>

            <div className="mt-5">
              <a
                href={bootcamp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm shadow-md transition duration-300"
              >
                Explore Bootcamp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobBootcamp;
