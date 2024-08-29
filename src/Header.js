import React from 'react';
import './Header.css'; // Include a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/08/18094522/beauty-bar-2.png" alt="Logo" className="logo" />
        <h1 className="title">Essentials</h1>
      </div>
    </header>
  );
};

export default Header;
