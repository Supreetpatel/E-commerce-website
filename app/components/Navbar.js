import React from "react";

export default function Navbar(){
    return(
        <nav className="bg-white">
        <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
      <a href="#" className="text-2xl font-bold">Rad Plants</a>
      <ul className="flex text-sm items-center space-x-6">
        <li><a href="#" className="hover:text-gray-800">Home</a></li>
        <li><a href="#" className="hover:text-gray-800">Catalogue</a></li>
        <li><a href="#" className="hover:text-gray-800">Contact</a></li>
      </ul>
      <ul className="flex items-center space-x-6">
        <li><a href="#" className="hover:text-gray-800">Search</a></li>
        <li><a href="#" className="hover:text-gray-800">Cart (0)</a></li>
      </ul>
    </div>
  </div>
</nav>
    );
}
    