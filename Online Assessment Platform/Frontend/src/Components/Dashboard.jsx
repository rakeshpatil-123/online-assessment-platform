import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faBook,
  faClipboard,
  faCalendarAlt,
  faQuestionCircle,
  faBell,
  faBookOpen,
  faCalendarCheck,
  faShoppingCart,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import Footer from "./Footer";
import Courses from "./Courses";
import JobAlerts from "./JobAlerts";
import OurBooks from "./OurBooks";
import CurrentAffairs from "./CurrentAffairs";
import Live from "./Live";
import Settings from "./Setting";
import Quiz from "./Quiz";
import TestSeries from "./TestSeries";
import PreviousYearPapers from "./PreviousYearPapers";
function Dashboard({ setIsLoggedIn }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "20%",
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <nav>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <Link
                  to={item.path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                  <span style={{ fontSize: "14px" }}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div style={{ width: "80%", padding: "20px", overflowY: "auto" }}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="test-series" element={<TestSeries />} />
          <Route path="previous-papers" element={<PreviousYearPapers />} />
          <Route path="current-affairs" element={<CurrentAffairs />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="job-alerts" element={<JobAlerts />} />
          <Route path="our-books" element={<OurBooks />} />
          <Route path="free-weekly-test" element={<FreeWeeklyTest />} />
          <Route path="live" element={<Live />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;

// Sample data for menu items
const menuItems = [
  { path: "home", label: "Home", icon: faHome },
  { path: "courses", label: "Courses", icon: faBook },
  { path: "test-series", label: "Test Series", icon: faClipboard },
  {
    path: "previous-papers",
    label: "Previous Year Papers",
    icon: faCalendarAlt,
  },
  { path: "current-affairs", label: "Current Affairs", icon: faQuestionCircle },
  { path: "quiz", label: "Quiz", icon: faBell },
  { path: "job-alerts", label: "Job Alerts", icon: faBookOpen },
  { path: "our-books", label: "Our Books", icon: faCalendarCheck },
  {
    path: "free-weekly-test",
    label: "Free Weekly Test",
    icon: faCalendarCheck,
  },
  { path: "live", label: "Live", icon: faCalendarCheck },
  { path: "purchases", label: "Purchases", icon: faShoppingCart },
  { path: "settings", label: "Settings", icon: faCog },
  { path: "logout", label: "Logout", icon: faSignOutAlt },
];
const FreeWeeklyTest = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: "50px",
      marginBottom: "300px",
      padding: "20px",
      background: "#f0f8ff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    }}
  >
    <h2>🎯 Free Weekly Test</h2>
    <p style={{ fontSize: "16px", marginTop: "10px" }}>
      Attempt curated weekly tests to evaluate and improve your preparation.
    </p>
    <button
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#4caf50",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={() => alert("Your weekly test will start soon!")}
    >
      Start Test
    </button>
  </div>
);

const Purchases = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: "50px",
      marginBottom: "300px",
      padding: "20px",
      background: "#fff3cd",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    }}
  >
    <h2>🛒 Your Purchases</h2>
    <p style={{ fontSize: "16px", marginTop: "10px" }}>
      View and manage your purchased test series, books, and more.
    </p>
    <button
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={() => alert("No recent purchases found.")}
    >
      View History
    </button>
  </div>
);
const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Prevent double confirm by using a ref
    if (!window.__dashboardLogout) {
      window.__dashboardLogout = true;
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
        localStorage.removeItem("token");
        if (setIsLoggedIn) setIsLoggedIn(false);
        alert("You have been logged out successfully");
        navigate("/");
      } else {
        navigate(-1);
      }
      setTimeout(() => {
        window.__dashboardLogout = false;
      }, 1000);
    }
  }, [navigate, setIsLoggedIn]);
  return (
    <h2
      style={{ textAlign: "center", marginTop: "100px", marginBottom: "300px" }}
    >
      Logging out...
    </h2>
  );
};
