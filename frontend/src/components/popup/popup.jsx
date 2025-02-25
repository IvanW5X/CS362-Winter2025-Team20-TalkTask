import React, { useState } from "react";



export const PopUp = ()=>{
    return (
        <>
        <div className="z-[10001] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <form className="w-[1000px] h-[800px] bg-blue-500 rounded-3xl">
                    <fieldset className="w-full h-fit flex justify-center">
                        <legend className="bg-white rounded-2xl text-[30px] font-semibold mt-4 w-[600px] text-center p-4">Add Task</legend>
                        
                        <p>
                            <label></label>
                            <input></input>
                        </p>
                    </fieldset>  
                </form>
            </div>
        </>
    );

};