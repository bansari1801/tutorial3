import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/order">
              Order
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/staff">
               Staff
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reports">
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
               Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
