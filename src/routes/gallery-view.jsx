import { Link, useRouteLoaderData } from "react-router-dom";

import { extractMuseumName } from "../utils";

const GalleryView = () => {
  const paintings = useRouteLoaderData("root");

  return (
    <main className="gallery-container">
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
                  } ${painting.culture} photograph from the ${extractMuseumName(
                    painting.creditline
                  )}, dated around ${painting.dated ?? "N/A"}.`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    </main>
  );
};

export default GalleryView;
