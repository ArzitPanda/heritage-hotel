import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='col-span-2 flex flex-col h-screen bg-white p-4 shadow-lg'>
      <Link to="/add-hotel">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          Add Hotel
        </button>
      </Link>
      <Link to="/hotels">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          View Hotels
        </button>
      </Link>
      <Link to="/add-booking">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          Add Booking
        </button>
      </Link>
      <Link to="/bookings">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          View Bookings
        </button>
      </Link>
      <Link to="/add-discount">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          Add Discount
        </button>
      </Link>
      <Link to="/discounts">
        <button className='mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none min-w-[150px] max-w-[250px]'>
          View Discounts
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
