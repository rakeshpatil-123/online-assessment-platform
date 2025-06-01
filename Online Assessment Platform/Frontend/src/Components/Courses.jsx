import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

import machine2 from "../images/machine 2.png";
import ai from "../images/ai.jpeg";
import graphics from "../images/graphics.png";
import python from "../images/python.jpeg";
import web from "../images/web.jpeg";
import machine from "../images/machine.jpeg";
import developer from "../images/developer.jpeg";
import hacking from "../images/hacking.jpeg";
import programming from "../images/programming.jpeg";
import langauge from "../images/language.png";

const courses = [
  {
    id: 1,
    image: web,
    title: "React Basics",
    description:
      "Learn the fundamentals of React and start building amazing UIs.",
    price: 49.99,
  },
  {
    id: 2,
    image: developer,
    title: "Advanced React",
    description:
      "Master React with advanced hooks, context, and performance optimization.",
    price: 99.99,
  },
  {
    id: 3,
    image: programming,
    title: "React with Redux",
    description:
      "Combine React with Redux to manage application state effectively.",
    price: 79.99,
  },
  {
    id: 4,
    image: machine,
    title: "JavaScript Essentials",
    description:
      "Gain a strong foundation in JavaScript for dynamic web applications.",
    price: 39.99,
  },
  {
    id: 5,
    image: hacking,
    title: "Full-Stack Development",
    description:
      "Become a full-stack developer with front-end and back-end skills.",
    price: 129.99,
  },
  {
    id: 6,
    image: ai,
    title: "Node.js and Express",
    description:
      "Learn backend development with Node.js and the Express framework.",
    price: 89.99,
  },
  {
    id: 7,
    image: graphics,
    title: "CSS for Beginners",
    description:
      "Start your web design journey by mastering CSS for beautiful sites.",
    price: 29.99,
  },
  {
    id: 8,
    image: machine,
    title: "HTML & Web Design",
    description:
      "Learn HTML and fundamental web design concepts to build webpages.",
    price: 25.99,
  },
  {
    id: 9,
    image: machine,
    title: "Responsive Web Design",
    description:
      "Make websites look great on any device with responsive design.",
    price: 59.99,
  },
  {
    id: 10,
    image: python,
    title: "Python for Data Science",
    description:
      "Use Python to analyze data and create powerful visualizations.",
    price: 109.99,
  },
  {
    id: 11,
    image: machine2,
    title: "Machine Learning Basics",
    description: "An introduction to machine learning concepts and algorithms.",
    price: 119.99,
  },
  {
    id: 12,
    image: langauge,
    title: "APIs and Integrations",
    description:
      "Learn how to create and use APIs to connect different services.",
    price: 69.99,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 120,
    },
  }),
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
};

const Courses = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="rounded-lg cursor-pointer"
        >
          <CourseCard course={{ ...course, price: `₹${course.price}` }} />
        </motion.div>
      ))}
    </div>
  );
};

export default Courses;
