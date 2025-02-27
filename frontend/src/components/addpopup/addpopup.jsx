import React, { useState } from "react";



export const AddPopUp = () => {
    return (
        <>
            <div className="z-[10001] absolute w-screen h-screen items-center flex justify-center">
            <form className="flex flex-col w-[1000px] h-[800px] max-w-full max-h-full bg-blue-500 rounded-3xl items-center shrink overflow-auto">

                    {/* title */}
                    <div className="bg-white mt-4 p-4 w-[600px] text-[40px] font-bold text-center rounded-2xl">Add Task</div>

                    <div className="flex flex-col items-start mt-4 w-full">
                        {/* input title */}
                        <p className="flex flex-row mx-12 my-5">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Title</label>
                            <input className={`border-[2px] bg-white w-[700px] m-2 p-2`}
                                type="text"
                                placeholder="Name of the task"
                                maxLength="100"
                            />
                        </p>

                        {/* input description */}
                        <p className="flex flex-row mx-12 items-center my-5">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Description</label>
                            <textarea className={`border-[2px] bg-white w-[700px] m-2 p-2 resize-none`}
                                placeholder="Description of the task"
                                maxLength="100"
                            />
                        </p>
                        {/* date/time start */}
                        <p className="flex flex-row mx-12 my-5">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Date Start</label>
                            <input className={`border-[2px] bg-white w-[140px] m-2 p-2`}
                                type="date"
                            />
                        </p>

                        {/* date/time done */}
                        <p className="flex flex-row mx-12 my-5">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Date Completed</label>
                            <input className={`border-[2px] bg-white w-[140px] m-2 p-2`}
                                type="date"
                            />
                        </p>

                        {/* recurring date */}
                        {/* <p className="flex flex-row mx-12">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Reccurring Date</label>
                            <input className={`border-[2px] bg-white w-[700px] m-2 p-2`}
                                type="date"
                                placeholder="Name of the task (25 characters)"
                                maxLength="100"
                            />
                        </p> */}


                        {/* priority */}
                        <p className="flex flex-row mx-12 my-5">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[200px]" >Priority</label>
                            <select className={`border-[2px] bg-white w-[50px] m-2 p-2`}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </p>

                        <p className="flex flex-row w-full justify-center ">
                            <button className="font-bold bg-[#37E03A] cursor-pointer m-3 p-2 rounded-2xl text-center w-[150px]">Add Task</button>
                            
                        </p>
                    </div>
                </form>
            </div>
        </>
    );

};