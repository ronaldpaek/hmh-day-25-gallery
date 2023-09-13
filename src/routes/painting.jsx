import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { artworkDetails, API } from "../constants";

const Painting = () => {
  const { paintingId } = useParams();
  const [painting, setPainting] = useState(null);

  const fetchPaintingById = async (id) => {
    try {
      const response = await fetch(API);

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      const { records } = data;
      const foundPainting = records.find((record) => record.id === Number(id));

      setPainting(foundPainting);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPaintingById(paintingId);
  }, [paintingId]);

  return (
    <main className="painting-container">
      {painting && (
        <>
          <h1 className="painting-title">{painting.title}</h1>
          <img
            src={painting.primaryimageurl}
            alt={painting.title}
            className="painting-image"
          />
          <dl className="painting-details">
            {artworkDetails.map(
              (detail) =>
                painting[detail] && (
                  <div key={detail} className="detail-item">
                    <dt className="detail-term">{detail}</dt>
                    <dd className="detail-description">{painting[detail]}</dd>
                  </div>
                )
            )}
          </dl>
        </>
      )}
    </main>
  );
};

export default Painting;
