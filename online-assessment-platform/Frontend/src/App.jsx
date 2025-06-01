import React, { useEffect, useState } from "react"; // <-- yahan useState add karo
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/MAIN/Navbar";
import Certifications from "./Components/NavComponents/Certifications";
import JobBootcamp from "./Components/NavComponents/JobBootcamp";
import Login from "./Components/NavComponents/Login";
import SignUp from "./Components/NavComponents/SignUp";
import Userdashboard from "./Components/Dashboard/Userdashboard";
// import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/MAIN/Landing";
import Home from "./Components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="sticky top-0">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/jobbootcamp" element={<JobBootcamp />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard/*"
          element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}
export default App;
