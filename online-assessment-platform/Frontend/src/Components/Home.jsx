import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from '../Components/Cards'
// import {
//   machine,
//   hacking,
//   graphics,
//   developer,
//   programming,
//   python,
//   web,
// } from "../images";
import machine from "../images/machine.jpeg";
import ai from "../images/ai.jpeg";
import graphics from "../images/graphics.png";
import hacking from "../images/hacking.jpeg";
import developer from "../images/developer.jpeg";
import programming from "../images/programming.jpeg";
import python from "../images/python.jpeg";
import web from "../images/web.jpeg";
import analytics from "../images/analytics.png";
import coding from "../images/coding.png";
import mock from "../images/mock.png";
import testing from "../images/testing.png";
import feedback from "../images/feedback.png";
import langauge from "../images/language.png";



const images = [
  developer,
  ai,
  graphics,
  hacking,
  machine,
  programming,
  python,
  web,
];

const features = [
  {
    title: "Real-time Code Testing",
    description: "Run code instantly and see output live.",
    image: langauge,
    additionalInfo:  "With an emphasis on mobile-first design, this feature ensures a seamless experience across different devices, automatically adjusting layout and content to match screen size."
  },
  {
    title: "Detailed Analytics",
    description: "Track your progress and skill growth over time.",
    image: analytics,
     additionalInfo: "Our analytics feature provides a powerful dashboard for tracking user engagement, conversion rates, and much more, all accessible in an easy-to-read format."
  },

  {
    title: "Mock Interviews",
    description: "Prepare for interviews with realistic coding challenges.",
    image: mock,
     additionalInfo:  "Our analytics feature provides a powerful dashboard for tracking user engagement, conversion rates, and much more, all accessible in an easy-to-read format."
  },
  {
    title: "Expert Feedback",
    description: "Get feedback from industry experts on your solutions.",
    image: feedback,
     additionalInfo:  "With our live collaboration tools, team members can edit, comment, and share ideas in real-time, boosting productivity and creativity for remote teams."
  },
  {
    title: "Collaborative Coding",
    description: "Work with peers on joint coding exercises.",
    image: coding,
     additionalInfo:   "Built with efficiency in mind, our features use the latest technologies to ensure that each action is quick and responsive, even under high loads."
  },
  {
    title: "Multilanguage Support",
    description: "Practice coding in multiple languages.",
    image: testing,
     additionalInfo:   "With our custom theme options, you can adjust colors, fonts, and layouts to match your brand identity or personal preferences effortlessly."
  },
];

function Dashboard() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,            // Transition speed (1 second)
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,    // Delay between slides (1 second)
        fade: true,
      };

  return (
    <div style={{ padding: "20px", marginTop: "20px"  }}>
      {/* Slideshow Section */}
      <Slider {...sliderSettings} style={{ marginBottom: "20px" }}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
   
      </Slider>

      <h1 className="text-4xl mt-32 mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-red-500 mx-auto text-center transform transition duration-300 hover:scale-105">
  Features
</h1>


      {/* Features Cards Section */}
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          style={{
            width: "30%",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            backgroundColor: "#ffffff",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            animation: "fadeIn 0.8s ease forwards",
          }}
          className="feature-card"
        >
          {/* Feature Image */}
          <img
            src={feature.image}
            alt={feature.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          />
          
          {/* Feature Title */}
          <h3
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            {feature.title}
          </h3>
          
          {/* Feature Description */}
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              marginBottom: "15px",
            }}
          >
            {feature.description}
          </p>
          
          {/* Additional Information */}
          <p
            style={{
              fontSize: "14px",
              color: "#777",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            {feature.additionalInfo}
          </p>
          
          {/* Call-to-Action Button */}
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => alert(`Exploring ${feature.title}`)}
          >
            View More
          </button>
        </div>
      ))}
    </div>

      {/* Introduction Section */}
      {/* <div
        style={{
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Welcome to Snap Platform
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            textAlign: "center",
          }}
        >
          Snap is a powerful platform for honing your coding skills,
          preparing for technical interviews, and tracking your progress. With a
          vast library of exercises and real-world coding challenges, it’s
          designed to help developers of all levels improve and stay
          competitive. Join us to take your coding journey to the next level!
        </p>
      </div> */}
      <Cards/>

      {/* Footer */}
     
    </div>
  );
}

export default Dashboard;
