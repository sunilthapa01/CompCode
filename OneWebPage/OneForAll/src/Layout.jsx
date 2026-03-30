import React from 'react'
import Tabs from './Component/Tabs'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='flex h-screen w-full bg-gray-50 dark:bg-gray-900 overflow-hidden'>
      <div className='w-64 flex-shrink-0 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'>
        <Tabs />
      </div>
      <div className='flex-1 h-full overflow-y-auto p-8 relative'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
