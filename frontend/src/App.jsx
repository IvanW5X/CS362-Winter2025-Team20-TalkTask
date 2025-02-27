/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import { Home } from "./pages/home/home";
import ExternalAPI from "./components/externalAPI/externalAPI";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./history";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/loading";



// Implement funcitonality for displaying about page or user home page; based on if user logged in
  // Use local storage/cookies and Routes for this

function App() {
  const {isLoading, error} = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Router history={history}>
      <div className=" bg-[#cdcdcd] h-screen w-full">
        <Routes>
          {/* <Route path="/" element={<ExternalAPI />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;