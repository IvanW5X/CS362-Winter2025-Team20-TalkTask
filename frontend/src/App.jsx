/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home/home";
import { CreateTask } from "./components/tasklist/createTask";
import { About } from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-[#cdcdcd] min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
