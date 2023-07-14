import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <Link to="/" className="menu-item" >Home</Link>
      <Link to="/" className="menu-item" >Home</Link>
      <Link to="/" className="menu-item" >Home</Link>
      <Link to="/" className="menu-item" >Home</Link>
    </Menu>
  );
};  