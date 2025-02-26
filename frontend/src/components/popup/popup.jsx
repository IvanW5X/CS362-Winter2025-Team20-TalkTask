import React, { useState } from "react";



export const PopUp = ()=>{
    return (
        <>
        <div className="z-[10001] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <form className="flex flex-col w-[1000px] h-[800px] bg-blue-500 rounded-3xl items-center">
                    <div className="bg-white mt-4 p-4 w-[600px] text-[40px] font-bold text-center rounded-2xl">Add Task</div>
                    
                    <p>
                        <label className="bg-green-200">Helo</label>
                        <input className={`border-[2px]`}
                            type="text"
                            placeholder="Name of the task (25 characters)"
                            maxlength="25"
                           
                        />
                    </p>
                </form>
            </div>
        </>
    );

};