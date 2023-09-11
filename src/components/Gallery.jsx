import { useOutletContext, Link } from "react-router-dom";

const Gallery = () => {
  const { paintings } = useOutletContext();
  return (
    <ul>
      {paintings.map((painting) => (
        <li key={painting.id}>{painting.title}</li>
      ))}
    </ul>
  );
};

export default Gallery;
