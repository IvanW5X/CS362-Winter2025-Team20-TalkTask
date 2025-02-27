/********************************************************************
 * File Name: App.jsx
 * Date: 1/13/2025
 * Description: Front end file to display all components
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";

function App() {
  return (
    <>
      <div className=" bg-[#cdcdcd] min-h-screen w-full">
          <Home />
      </div>
    </>
  );
}

export default App;
