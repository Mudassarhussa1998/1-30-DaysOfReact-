import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const links = [
    { name: " Day 1 - Color Picker", path: "/" },
    { name: " Calculator", path: "/calculator" },
    { name: " Counter", path: "/counter" },
    { name: " Todo List", path: "/todo" },
    { name: " Unit Convertor", path: "/convertor" },
    { name: " Movies", path: "/movies" },
    { name: " Birthday Reminder", path: "/birthday" },
    { name: " Accordion", path: "/accordion" },
    { name: " Search", path: "/search" },
    { name: " Day One", path: "/dayone" },
  ];

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6"> React 30 Days Challenge</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-gray-100 transition text-center"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
