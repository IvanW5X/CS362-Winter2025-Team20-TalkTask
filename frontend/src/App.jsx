/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();
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
      <div className="bg-white text-red-500 text-lg">
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
    <div className="bg-[#dedede]">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
