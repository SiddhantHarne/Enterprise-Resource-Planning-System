//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Products from './Component/Products';
import Orders from './Component/Orders';
import OrderCalendar from './Component/OrderCalendar';
import { productsData, ordersData } from './Component/Data';

const App = () => {
  return (

    <Router>
    <div className="App" >
      <Routes>
        <Route path="/" exact element={ <Dashboard productsCount={productsData.length} ordersCount={ordersData.length} />} />
        <Route path="/products" element={ <Products products={productsData} />} />
        <Route path="/orders" element={ <Orders orders={ordersData} />} />
        <Route path="/ordercalendar" element={ <OrderCalendar orders={ordersData} />} />
        <Route path="/dashboard" element={<Dashboard Dashboard={Dashboard}/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
