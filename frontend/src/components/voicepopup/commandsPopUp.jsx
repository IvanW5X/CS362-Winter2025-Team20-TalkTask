import ReactMarkdown from "react-markdown";
import { IoClose } from "react-icons/io5";
import commands from "../../../../documents/commands.md?raw";

export const CommandsPopUp = ({ onClose }) => {
  const sections = commands.split(/\n---+\r?\n/);

  return (
    <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
      <div className="relative bg-[#CCCCCC] p-11 rounded-3xl max-w-[900px] max-h-[90vh] overflow-auto hide-scrollbar">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
          type="button"
        >
          <IoClose className="cursor-pointer" />
        </button>

        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <h1
                className="text-3xl font-bold text-black text-center mb-8 bg-[#F4F3F2] p-4 rounded-xl shadow-md"
                {...props}
              />
            ),
          }}
        >
          {sections[0]}
        </ReactMarkdown>

        <div className="mt-8 space-y-10 text-lg">
          {sections.slice(1).map((section, index) => (
            <div
              key={index}
              className="prose bg-[#37E03A] p-6 rounded-xl shadow-xl text-center"
            >
              <ReactMarkdown
                components={{
                  h2: ({ ...props }) => (
                    <h2 className="text-2xl font-bold mb-4 " {...props} />
                  ),
                  ul: ({ children, ...props }) => (
                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none"
                      {...props}
                    >
                      {children}
                    </ul>
                  ),
                  li: ({ children, ...props }) => (
                    <li
                      className="bg-[#F4F3F2] p-4 rounded-xl shadow-sm"
                      {...props}
                    >
                      {children}
                    </li>
                  ),
                  strong: ({ children, ...props }) => (
                    <span className="underline font-semibold" {...props}>
                      {children}
                    </span>
                  ),
                  em: ({ children, ...props }) => (
                    <span className="italic" {...props}>
                      {children}
                    </span>
                  ),
                }}
              >
                {section}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
