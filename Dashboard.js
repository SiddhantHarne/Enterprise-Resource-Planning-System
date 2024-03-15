// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ productsCount, ordersCount }) => {
    const borderStyle = {
        border: '10px solid black', // Specify border properties
        padding: '10px', // Add padding for spacing
      };
  return (
    
    <div style={borderStyle}>
      <h1><u>DASHBOARD</u></h1>
      <p><h2>Total Products: {productsCount}</h2></p>
      <p><h2>Total Orders: {ordersCount}</h2></p>
      <Link to="/products"><h1><button>Products Management</button></h1></Link>
      <Link to="/orders"><h1><button>Orders Management</button></h1></Link>
      <Link to="/ordercalendar"><h1><button>Order Calendar</button></h1></Link>
      
    </div>
    
  );
};

export default Dashboard;
