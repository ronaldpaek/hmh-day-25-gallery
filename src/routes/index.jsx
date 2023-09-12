import { Link, useOutletContext } from "react-router-dom";

const extractMuseumName = (creditline) => creditline.split(",")[0];

const Index = () => {
  const { paintings } = useOutletContext();

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
                    src={painting.images[0].baseimageurl}
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

export default Index;
