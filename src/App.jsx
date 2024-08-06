// App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className='grid grid-cols-8 w-screen h-screen bg-white'>
      <div className='col-span-2 bg-gray-200 p-4'>
        <Dashboard />
  
      </div>
      <div className='col-span-6 p-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
