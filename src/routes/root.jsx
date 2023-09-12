import { useState, useEffect } from "react";

import { API } from "../constants";

const extractMuseumName = (creditline) => creditline.split(",")[0];

const Root = () => {
  const [paintings, setPaintings] = useState([]);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

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

  const handleImageError = (id) => {
    setImageLoadStatus((prevStatus) => ({
      ...prevStatus,
      [id]: false,
    }));
  };

  useEffect(() => {
    fetchPaintings();
  }, []);

  useEffect(() => {
    const initialStatus = {};
    paintings.forEach((painting) => {
      initialStatus[painting.id] = true;
    });
    setImageLoadStatus(initialStatus);
  }, [paintings]);

  return (
    <main className="gallery-container">
      {paintings.length > 0 ? (
        <>
          <h1 className="gallery-title">Gallery</h1>
          <ul className="paintings-list">
            {paintings.map(
              (painting) =>
                imageLoadStatus[painting.id] && (
                  <li key={painting.id} className="painting-item">
                    <img
                      className="painting-image"
                      src={painting.images[0].baseimageurl}
                      alt={`${painting.title} - A ${
                        painting.century ?? "N/A century"
                      } ${
                        painting.culture
                      } photograph from the ${extractMuseumName(
                        painting.creditline
                      )}, dated around ${painting.dated ?? "N/A"}.`}
                      onError={() => handleImageError(painting.id)}
                    />
                  </li>
                )
            )}
          </ul>
        </>
      ) : null}
    </main>
  );
};

export default Root;
