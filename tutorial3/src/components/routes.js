import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './profile';
import Register from './register';


//Reference: https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
const AppRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

  );
}

export default AppRoutes;
