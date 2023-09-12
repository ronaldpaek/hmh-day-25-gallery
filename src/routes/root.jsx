import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { API, DEFAULT_USER } from "../constants";
import { Navbar } from "../components";

const Root = () => {
  const [paintings, setPaintings] = useState([]);
  const [user, setUser] = useState(DEFAULT_USER);

  const fetchPaintings = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      const { records } = data;
      const recordsWithImages = records.filter(
        (record) => record.images.length > 0
      );
      setPaintings(recordsWithImages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPaintings();
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ paintings, setUser }} />
    </>
  );
};

export default Root;
