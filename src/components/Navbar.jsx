// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FemmeEnAvant</h1>
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rights">Know Your Right</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
