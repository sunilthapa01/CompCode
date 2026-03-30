import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            Task Priority Manager
          </h1>
          <p className="text-gray-500 text-lg">
            Manage tasks efficiently
          </p>
        </div>

        {/* Form and List container */}
        <div className="space-y-8">
          <TaskForm />
          
          <div className="border-t border-gray-200 pt-8 mt-8">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
