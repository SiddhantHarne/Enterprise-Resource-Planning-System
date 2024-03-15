// OrderCalendar.js (optional)

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const OrderCalendar = ({ orders }) => {
    const borderStyle = {
        border: '10px solid black', // Specify border properties
        padding: '10px', // Add padding for spacing
      };
  // Implement calendar view here
  const [date, setDate] = useState(new Date());

  // Filter orders based on the selected date
  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate.getFullYear() === date.getFullYear() &&
           orderDate.getMonth() === date.getMonth() &&
           orderDate.getDate() === date.getDate();
  });
  return (
    <div  style={borderStyle}>
      <h2><u>Orders Calendar View</u></h2><br/>
      <Calendar
        onChange={setDate}
        value={date}
        /><br/>
       <h3>Orders for {date.toDateString()}</h3>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id}><br/>
            <p>Product: {order.product}</p>
            <p>Order ID: {order.id}</p>
            <p>Customer Name: {order.customerName}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul><br/>
      <Link to="/dashboard"><button>Back to Dashboard</button></Link>
    </div>
  );
};

export default OrderCalendar;
