/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingSpinner } from "./components/loading-spinner/loading-spinner";
import externalApi from "./components/externalApi/externalApi";

function App() {
  const {isLoading, error} = useAuth0();

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }
  if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  return (
    <div>
      <Router history={history}>
        <div className="bg-[#dedede] w-[100vw]">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
