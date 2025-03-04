import { IoClose } from 'react-icons/io5';
import axios from 'axios';



export const DayPopUp = ({ onClose }) => {

    return (
        <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
            <div className="relative bg-[#CCCCCC] p-8 rounded-3xl max-w-[900px] max-h-[90vh] overflow-auto hide-scrollbar">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
                    onClick={onClose}
                    type="button"
                >
                    <IoClose className="cursor-pointer" />
                </button>

                <div className="grid grid-cols-2 space-x-4">
                    <div className="text-3xl font-bold text-black text-center mb-8 bg-[#37E03A] p-4 rounded-xl shadow-md">
                        Amount Started
                    </div>

                    <div className="text-3xl font-bold text-black text-center mb-8 bg-[#37E03A] p-4 rounded-xl shadow-md w-full">
                        Amount Completed
                    </div>

                    <div className="text-3xl text-black text-center mb-8 bg-[#F4F3F2] p-4 rounded-xl shadow-md">
                        2
                    </div>

                    <div className="text-3xl text-black text-center mb-8 bg-[#F4F3F2] p-4 rounded-xl shadow-md w-full">
                        1
                    </div>
                </div>
            </div>
        </div>
    );
};
