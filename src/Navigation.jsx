import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Search from "./search";

function Navigation() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/car">Car</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/outlet">Outlet</Link>
        </li>
      </ul>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default Navigation;
