import { Link } from "react-router-dom";
import "./App.css";
import Search from "./search";

function Navigation() {
  return (
    <div>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/outlet">Outlet</Link>
        </li>
      </ul>
      <Search />
    </div>
  );
}

export default Navigation;
