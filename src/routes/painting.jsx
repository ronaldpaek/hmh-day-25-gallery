import { useParams, useOutletContext } from "react-router-dom";

import { artworkDetails } from "../constants";

const Painting = () => {
  const { paintingId } = useParams();
  const { paintings } = useOutletContext();

  const painting = paintings.find(
    (painting) => painting.id === Number(paintingId)
  );

  return (
    <main className="painting-container">
      <h1 className="painting-title">{painting.title}</h1>
      <img
        src={painting.primaryimageurl}
        alt={painting.title}
        className="painting-image"
      />
      <dl className="painting-details">
        {artworkDetails.map((detail) => (
          <div key={detail} className="detail-item">
            <dt className="detail-term">{detail}</dt>
            <dd className="detail-description">{painting[detail]}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
};

export default Painting;
