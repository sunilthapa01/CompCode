import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Tabs = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/Counter");
  }
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          UniTools
        </h1>
      </div>

      <div className="flex-1 flex flex-col gap-2 p-4">
        <button onClick={handle} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 font-medium text-sm group">
          <span>Counter App</span>
        </button>

        <button onClick={() => navigate('/Todo')} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 font-medium text-sm group">
          <span>Todo List</span>
        </button>

        <button onClick={() => navigate('/Quotes')} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 font-medium text-sm group">
          <span>Get Quotes</span>
        </button>

        <button onClick={() => navigate("/Jokes")} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 font-medium text-sm group">
          <span>Joke Generator</span>
        </button>
      </div>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-4 text-white shadow-lg shadow-indigo-200 dark:shadow-none">
          <h1 className="font-bold text-lg mb-1">
            Choose a Tool
          </h1>
          <p className="text-xs text-indigo-100 leading-relaxed mb-3">
            Select a tool from the menu to get started.
          </p>
          <div className="h-1 w-12 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
