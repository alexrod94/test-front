import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="py-2 bg-slate-600 text-white">
      <Link to="/">
        <button className="text-white underline mr-2 hover:text-blue-700">
          Home
        </button>
      </Link>

      <Link to="/create">
        <button className="text-white underline ml-2 hover:text-blue-700">
          Create
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
