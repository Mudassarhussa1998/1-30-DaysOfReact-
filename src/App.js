import { useState } from 'react';
import './App.css';
import { Routes, Route ,Link } from "react-router-dom";

import Calculator from './pages/calculator';
import Counter from './pages/counter';
import Dayone from './pages/dayone';
import Todo from './pages/todo';
import Convertor from './pages/convertor';
import Movies from './pages/movies';
import Birthday from './pages/birthday';
import Accordion from './pages/Accordion';
import Search from './pages/Search';
import Home from './pages/Home';

function App() {
  const [color, setcolor] = useState("");

  const collection = [
    {
      Movies: "Inception",
      rating: "8.8",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
      Movies: "Interstellar",
      rating: "8.6",
      image: "https://upload.wikimedia.org/wikipedia/en/3/39/Interstellar_film_poster.jpg"
    },
    {
      Movies: "The Dark Knight",
      rating: "9.0",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Dark_Knight_%282008_film%29_poster.jpg"
    }
  ];

  return (
    <div
      className="App"
      style={{ backgroundColor: color }}
    >
      <div>
        {color}
        <input type="color" onChange={(e) => setcolor(e.target.value)} />
      </div>

      <nav className="flex gap-4 p-3 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/movies">Movies</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/convertor" element={<Convertor />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dayone" element={<Dayone />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/movies" element={<Movies collection={collection} />} />

      </Routes>
    </div>
  );
}

export default App;
