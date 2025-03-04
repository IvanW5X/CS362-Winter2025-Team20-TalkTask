/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Go to home page after being authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  // Something went wrong, return generic error UI
  if (error) {
    return (
      <div className="bg-[[#F4F3F2] text-red-500 text-lg">
        Something went wrong: {error.message}
      </div>
    );
  }
  // Loading, return some UI component to let user know
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
