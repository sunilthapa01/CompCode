import React from 'react'
import Tabs from './Tabs'
import Counter from '../Pages/Counter'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-center'>
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">UniTools</span>
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
        Your all-in-one productivity destination. Select a tool from the sidebar to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Visual placeholders for cards since logic is in sidebar */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-2">Simple & Clean</h3>
          <p className="text-gray-500 text-sm">Distraction-free interface for maximum focus.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-2">Fast Performance</h3>
          <p className="text-gray-500 text-sm">Lightweight tools that load instantly.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
