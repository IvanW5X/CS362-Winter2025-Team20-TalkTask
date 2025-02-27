import React, { useState } from "react";






export const AddPopUp = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [dateCreated, setDateCreated] = useState('');
    // const [dateCompleted, setDateCompleted] = useState('');   
    const [timeStart, setTimeStart] = useState('')
    const [timeEnd, setTimeEnd] = useState('')
    const [priority, setPriority] = useState('');

    

    const addTask = async () => {
        
    }

    return (
        <>
            <div className="z-[10001] absolute inset-0 items-center flex justify-center">
            <form className="border-3 flex flex-col w-[900px] h-[700px] max-w-full max-h-full bg-gray-200 rounded-3xl items-center shrink overflow-auto"
                    onSubmit={(t)=>{ t.preventDefault();}}        
            >

                    {/* title */}
                    <div className="bg-white mt-4 p-4 w-[400px] text-[40px] font-bold text-center rounded-2xl">Add Task</div>

                    <div className="flex flex-col items-start mt-4 w-full">

                        {/* input title */}
                        <p className="flex flex-row mx-12 my-4">
                            <label for="title" className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Title</label>
                            <input className={`border-[2px] bg-white w-[600px] m-2 p-2`}
                                type="text"
                                placeholder="Name of the task"
                                maxLength="100"
                                id="title"
                                onChange={t=> setTitle(t.target.value)}
                            />
                        </p>

                        {/* input description */}
                        <p className="flex flex-row items-center mx-12 my-4">
                            <label for="description" className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Description</label>
                            <textarea className={`border-[2px] bg-white w-[600px] m-2 p-2 resize-none`}
                                placeholder="Description of the task"
                                maxLength="100"
                                id="description"
                                onChange={t=> setDescription(t.target.value)}
                            />
                        </p>

                        {/* date/time start */}
                        <p className="flex flex-row mx-12 my-4">
                            <label for="timeStart" className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Time Start</label>
                            <input className={`border-[2px] bg-white w-[130px] m-2 p-2`}
                                type="time"
                                id="timeStart"
                                onChange={t=> setTimeStart(t.target.value)}
                            />
                        </p>

                        {/* date/time done */}
                        <p className="flex flex-row mx-12 my-4">
                            <label for="timeEnd" className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Completed By</label>
                            <input className={`border-[2px] bg-white w-[130px] m-2 p-2`}
                                type="time"
                                id="timeEnd"
                                onChange={t=> setTimeEnd(t.target.value)}
                            />
                        </p>

                        {/* recurring date */}
                        {/* <p className="flex flex-row mx-12">
                            <label className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Reccurring Date</label>
                            <input className={`border-[2px] bg-white w-[700px] m-2 p-2`}
                                type="date"
                                placeholder="Name of the task (25 characters)"
                                maxLength="100"
                            />
                        </p> */}


                        {/* priority */}
                        <p className="flex flex-row mx-12 my-4">
                            <label for="priority" className="bg-white m-3 p-2 rounded-2xl text-center w-[150px]" >Priority</label>
                            <select id="priority" 
                                    className={`border-[2px] bg-white w-[50px] m-2 p-2`}
                                    onChange={t=> setPriority(t.target.value)}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </p>

                        <p className="flex flex-row w-full text-white justify-center ">
                            <button className="font-bold bg-[#37E03A] cursor-pointer m-3 p-2 rounded-2xl text-center w-[150px]"
                                    type="submit"
                                    id="submit"
                                    onClick={addTask}
                            > Add Task</button>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );

};