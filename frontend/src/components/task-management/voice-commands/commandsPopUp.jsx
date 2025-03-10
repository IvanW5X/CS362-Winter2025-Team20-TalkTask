import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import commandsData from "./commands.json"; // Adjust the path to your JSON file

export const CommandsPopUp = ({ onClose }) => {
  const { commands } = commandsData; // Destructure the commands array from the JSON file

  // Stop scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
      <div className="relative border-3 flex flex-col w-[900px] h-[700px] bg-gray-200 rounded-3xl items-center overflow-x-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
          type="button"
        >
          <IoClose className="cursor-pointer" />
        </button>

        {/* Label */}
        <div className="bg-[#F4F3F2] mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">
          Voice Commands
        </div>

        {/* Commands List */}
        <div className="flex flex-col mt-4 w-[90%] max-w-[800px] mx-auto space-y-6">
          {commands.map((command, index) => (
            <div key={index} className="bg-[#F4F3F2] p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 capitalize">
                {command.type} Commands
              </h2>
              <p className="text-lg mb-4">{command.description}</p>
              <div className="space-y-2">
                {command.syntax.map((syntax, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    {syntax} {/* Display the syntax without numbering */}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};