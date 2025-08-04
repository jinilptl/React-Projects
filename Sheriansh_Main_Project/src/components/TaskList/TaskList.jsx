
import React from 'react';

const tasks = [
  {
    priority: 'High',
    date: '20 Feb 2024',
    title: 'Make a Youtube video',
    description: 'Create a video on new React features and post it.',
    bgColor: 'bg-red-400',
  },
  {
    priority: 'Medium',
    date: '21 Feb 2024',
    title: 'Complete Assignment',
    description: 'Finish the backend assignment using Node.js.',
    bgColor: 'bg-blue-400',
  },
  {
    priority: 'Low',
    date: '22 Feb 2024',
    title: 'Read a book',
    description: 'Read 2 chapters from "Clean Code".',
    bgColor: 'bg-green-400',
  },
  {
    priority: 'Urgent',
    date: '23 Feb 2024',
    title: 'Fix bugs in portfolio',
    description: 'Fix mobile responsiveness and navbar issues.',
    bgColor: 'bg-yellow-400',
  },
  {
    priority: 'High',
    date: '24 Feb 2024',
    title: 'Plan Weekend Trip',
    description: 'Book hotel and make itinerary.',
    bgColor: 'bg-purple-400',
  },
];

const TaskCard = ({ task }) => (
  <div className={`flex-shrink-0 h-full w-[300px] ${task.bgColor} rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300`}>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>{task.priority}</h3>
      <h4 className='text-sm text-gray-800'>{task.date}</h4>
    </div>
    <h2 className='capitalize mt-5 text-2xl font-semibold text-white'>{task.title}</h2>
    <p className='text-sm mt-2 text-white'>{task.description}</p>
  </div>
);

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap overflow-x-auto w-full px-2 py-5 mt-10'>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
