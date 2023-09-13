import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { API } from "../constants";

const extractMuseumName = (creditline) => creditline.split(",")[0];

const GalleryView = () => {
  const [paintings, setPaintings] = useState([]);

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
    <main className="gallery-container">
      {paintings.length > 0 ? (
        <>
          <h1 className="gallery-title">Gallery</h1>
          <ul className="paintings-list">
            {paintings.map((painting) => (
              <li key={painting.id} className="painting-item">
                <Link to={`paintings/${painting.id}`}>
                  <img
                    className="painting-image"
                    src={painting.primaryimageurl}
                    alt={`${painting.title} - A ${
                      painting.century ?? "N/A century"
                    } ${
                      painting.culture
                    } photograph from the ${extractMuseumName(
                      painting.creditline
                    )}, dated around ${painting.dated ?? "N/A"}.`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
};

export default GalleryView;
