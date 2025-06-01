import React from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    organization: "NPTEL",
    date: "October 2024",
    description:
      "This course covered the basics of machine learning algorithms, data preprocessing, and implementation in Python.",
    link: "https://nptel.ac.in/courses/106103194",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    organization: "Coursera",
    date: "August 2024",
    description:
      "A comprehensive course on full-stack development, covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
    link: "https://www.coursera.org/learn/full-stack-web-development",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "July 2024",
    description:
      "This certification validates your skills in designing distributed systems on AWS, understanding AWS services, and architecture best practices.",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    organization: "GeeksforGeeks",
    date: "June 2024",
    description:
      "An in-depth course on data structures and algorithms, including arrays, linked lists, stacks, queues, sorting algorithms, and more.",
    link: "https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" },
};

const Certifications = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-zinc-500 mb-12">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="bg-white rounded-lg p-6 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {certificate.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              Issued by: {certificate.organization}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Date: {certificate.date}
            </p>
            <p className="text-md text-gray-700">{certificate.description}</p>

            <motion.a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
