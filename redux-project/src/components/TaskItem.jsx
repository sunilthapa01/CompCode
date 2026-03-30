import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../slice/slice';

const TaskItem = ({ inTask }) => {

  const task = { ...inTask, priority: inTask.status };
  const getPriorityColors = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };
  const dispatch = useDispatch();
  

  const priorityLabel = task?.priority.charAt(0).toUpperCase() + task?.priority.slice(1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all hover:shadow-md hover:border-blue-100 group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{task.name}</h3>
        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getPriorityColors(task.priority)}`}>
          {priorityLabel}
          </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
        {task.description}
      </p>

      <div className="flex justify-end gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Complete
        </button>
        
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
        
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors" onClick={() => {
          dispatch(deleteTask(inTask.id))
          console.log('Delete Task Clicked !');
          
        }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
