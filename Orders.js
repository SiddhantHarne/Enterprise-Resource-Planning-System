// Orders.js

import React from 'react';
import { Link } from 'react-router-dom';

const Orders = ({ orders }) => {
  return (
    <div>
      <h1><u>ORDERS MANAGEMENT</u></h1><br/>
      <center>
      <table>
        <thead>
          <tr>
            <th>Order ID </th>
            <th>Customer Name </th>
            <th>Order Date </th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table><br/>
      <Link to="/dashboard"><button>Back to Dashboard</button></Link>
      </center>
    </div>
  );
};

export default Orders;
