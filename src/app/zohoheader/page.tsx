'use client'
import React, { useState } from 'react';
import './zohoheader.scss'; // Import the SCSS file

const ZohoHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header">
      {/* Add an image to the left side */}
      <div className="logo">
        <img src="/images/hrlogo.png" alt="Logo" />
      </div>
      <div className="menu">
        <a href="/zoho" className="menu-item">Dashboard</a>
        <a href="/zoho/jobopenings" className="menu-item">Job Openings</a>
        <a href="/zoho/candidates" className="menu-item">Candidates</a>
        <a href="/zoho/interviews" className="menu-item">Interviews</a>
        <a href="/zoho/clients" className="menu-item">Clients</a>
      </div>
      <div className="plus-menu" onClick={toggleDropdown}>
        +
        {dropdownVisible && (
          <div className="dropdown-content">
            <a href="/zoho/postjobopenings">Job Openings</a>
            <a href="/zoho/postcandidate">Candidates</a>
            <a href="/zoho/postclient">Clients</a>
            <a href="/zoho/postinterviews">Interviews</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZohoHeader;
