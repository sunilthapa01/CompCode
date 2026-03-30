import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () => {
  // Dummy data for visual representation

  const Selector = useSelector((state) => state.todoItem.todo)
  // const dummyTasks = [
  //   {
  //     id: 1,
  //     title: 'Setup Redux Toolkit',
  //     description: 'Install @reduxjs/toolkit and react-redux, then create the store.',
  //     priority: 'high',
  //   },
  //   {
  //     id: 2,
  //     title: 'Create Task Slice',
  //     description: 'Define the initial state, reducers, and actions for task management.',
  //     priority: 'medium',
  //   },
  //   {
  //     id: 3,
  //     title: 'Review UI Requirements',
  //     description: 'Check if all layout and spacing meet the original design guidelines.',
  //     priority: 'low',
  //   },
  // ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 px-1">Your Tasks</h2>
      <div className="grid gap-4">
        {Selector.map((task) => (
          <TaskItem key={task.id} inTask={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
