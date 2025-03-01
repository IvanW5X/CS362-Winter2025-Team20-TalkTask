import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { VITE_BACKEND_URL } from '../../../utils/variables';

export const CreateTask = () => { 
    const queryClient = useQueryClient();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('work');
    const [priority, setPriority] = useState(1);
    const [status, setStatus] = useState('pending');

    const createTaskMutation = useMutation(
        (newTask) => axios.post(`${VITE_BACKEND_URL}/tasks/create-task`, newTask),
        {
            onSuccess: () => {
                console.log('Task created successfully');
                queryClient.invalidateQueries('tasks');
                setTitle("");
                setDescription("");
                setCategory("work");
                setPriority(1);
                setStatus("pending");
                window.location.href = "/";
            },
            onError: (error) => {
                console.error('An error occurred while creating the task:', error.response?.data || error.message);
            },
        }
    );

    const handleSubmit = (e) => { 
        e.preventDefault();
        const newTask = {
            taskID: Date.now(),
            title,
            description,
            category,
            priority,
            status,
            userId: '64c0f3abf8d12c0004c4a1f2',
        };
        console.log('Creating task:', newTask);
        createTaskMutation.mutate(newTask);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className='text-2xl font-bold mb-4'>Create new task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Priority:</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(Number(e.target.value))}
                        className="w-full border p-2"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold">Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full border p-2"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};
