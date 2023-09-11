import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import { API } from "./constants";
import "./App.css";

function App() {
  const [paintings, setPaintings] = useState([]);

  const fetchPaintings = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setPaintings(data.records);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPaintings();
  }, []);
  console.log(paintings);
  return (
    <div className="App">
      <Navbar />
      <Outlet context={{ paintings }} />
    </div>
  );
}

export default App;
