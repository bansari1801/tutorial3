import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMenuItem from '../menuItems/AddMenuItem';
import MenuItemsList from '../menuItems/MenuItemsList';
import OrderList from '../order/OrderList';


//Reference: https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
const AppRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<OrderList />} />
          <Route exact path="/order" element={<OrderList />} />
          <Route exact path="/menu" element={<MenuItemsList />} />
          <Route exact path="/menu/add" element={<AddMenuItem />} />
        </Routes>
      </BrowserRouter>

  );
}

export default AppRoutes;